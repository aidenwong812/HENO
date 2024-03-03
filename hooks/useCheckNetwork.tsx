import { useNetwork, useSwitchNetwork } from "wagmi"
import { useCallback } from "react"
import { CHAIN_ID } from "../lib/consts"

function useCheckNetwork() {
  const { chain: activeChain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const checkNetwork = useCallback(() => {
    if (activeChain?.id !== CHAIN_ID) {
      switchNetwork(CHAIN_ID)
      return false
    }

    return true
  }, [switchNetwork, activeChain])

  return {
    checkNetwork,
  }
}

export default useCheckNetwork
