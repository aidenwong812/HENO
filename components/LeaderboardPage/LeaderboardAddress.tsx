import { useEffect, useState } from "react"

import retryGetEns from "../../lib/retryGetEns"
import truncateEthAddress from "../../lib/truncateEthAddress"
import getLensHandle from "../../lib/lens/getLensHandle"

const LeaderboardAddress = ({ address }) => {
  const [ensName, setEnsName] = useState(null as string)

  const handleClick = () => {
    if (ensName?.includes?.(".lens")) {
      window.open(`https://hey.xyz/u/${ensName}`, "_blank")
      return
    }
    window.open(`https://zora.co/${ensName || address}`, "_blank")
  }

  useEffect(() => {
    const init = async () => {
      const lensHandle = await getLensHandle(address)
      if (lensHandle) {
        setEnsName(lensHandle)
        return
      }
      const ensRecord = await retryGetEns(address)
      if (!ensRecord?.title) return
      setEnsName(ensRecord?.title)
    }

    if (!address) return
    init()
  }, [address])

  return (
    <td
      className="flex md:items-center justify-center gap-[2px] md:gap-3 
        w-full
        text-[8px] text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
    >
      <button type="button" onClick={handleClick}>
        {ensName || truncateEthAddress(address)}
      </button>
    </td>
  )
}

export default LeaderboardAddress
