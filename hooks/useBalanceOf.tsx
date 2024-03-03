import { Contract } from "ethers"
import { useAccount } from "wagmi"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Multicall, ContractCallResults, ContractCallContext } from "ethereum-multicall"
import axios from "axios"
import abi from "../lib/abi/zora-drop.json"
import getDefaultProvider from "../lib/getDefaultProvider"
import { CHAIN_ID } from "../lib/consts"
import getIpfsLink from "../lib/getIpfsLink"
import getTokenIdsFromEvents from "../lib/getTokenUrisFromEvents"

const useBalanceOf = () => {
  const { address } = useAccount()
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState(null)
  const dropContract = useMemo(
    () => new Contract(process.env.NEXT_PUBLIC_DROP_ADDRESS, abi, getDefaultProvider(CHAIN_ID)),
    [],
  )
  const [cameraCount, setCameraCount] = useState(0)
  const [moneyCount, setMoneyCount] = useState(0)
  const [heartCount, setHeartCount] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)

  const fetchBalance = useCallback(async () => {
    if (!address) return
    setLoading(true)
    const balanceOf = await dropContract.balanceOf(address)
    const response = await dropContract.totalSupply()
    setTotalSupply(response)
    setBalance(balanceOf.toNumber())
    setLoading(false)
  }, [dropContract, address])

  const getTokenUrisFromTokenIds = (events, ids) => {
    const metadata = []
    events.forEach((call, index) => {
      if (call.success && ids.includes(index)) {
        metadata.push(getIpfsLink(call.returnValues[0]))
      }
    })
    return metadata
  }

  const updateGameItems = async (metadata) => {
    const response = await Promise.all(metadata.map((url) => axios.get(url)))
    let tempCameraCount = 0
    let tempHeartCount = 0
    let tempMoneyCount = 0
    for (let i = 0; i < response.length; i += 1) {
      const ticketType = response[i].data.attributes[0].value
      if (ticketType === "HEART") {
        tempHeartCount += 1
      }
      if (ticketType === "CAMERA") {
        tempCameraCount += 1
      }
      if (ticketType === "MONEY") {
        tempMoneyCount += 1
      }
    }
    setCameraCount(tempCameraCount)
    setHeartCount(tempHeartCount)
    setMoneyCount(tempMoneyCount)
  }

  const aggregateReads = useCallback(async () => {
    const ownerOfCalls = []
    const tokenUriCalls = []
    for (let i = 1; i <= totalSupply; i += 1) {
      ownerOfCalls.push({
        reference: "ownerOf",
        methodName: "ownerOf",
        methodParameters: [i],
      })
      tokenUriCalls.push({
        reference: "tokenURI",
        methodName: "tokenURI",
        methodParameters: [i],
      })
    }
    const multicall = new Multicall({
      ethersProvider: getDefaultProvider(CHAIN_ID),
      tryAggregate: true,
    })
    const contractCallContext: ContractCallContext[] = [
      {
        reference: "ownerOfCalls",
        contractAddress: process.env.NEXT_PUBLIC_DROP_ADDRESS,
        abi,
        calls: ownerOfCalls,
      },
      {
        reference: "tokenURICalls",
        contractAddress: process.env.NEXT_PUBLIC_DROP_ADDRESS,
        abi,
        calls: tokenUriCalls,
      },
    ]
    const results: ContractCallResults = await multicall.call(contractCallContext)
    let response = getTokenIdsFromEvents(results.results.ownerOfCalls.callsReturnContext, address)
    response = getTokenUrisFromTokenIds(results.results.tokenURICalls.callsReturnContext, response)
    await updateGameItems(response)

    return results
  }, [address, totalSupply])

  useEffect(() => {
    fetchBalance()
  }, [dropContract, fetchBalance])

  useEffect(() => {
    if (totalSupply === 0) return
    aggregateReads()
  }, [totalSupply, aggregateReads])

  return {
    balance,
    loadingBalance: loading,
    fetchBalance,
    cameraCount,
    moneyCount,
    heartCount,
  }
}

export default useBalanceOf
