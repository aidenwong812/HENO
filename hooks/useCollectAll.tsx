import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useEthersSigner } from "onchain-magic"
import useCheckNetwork from "@/hooks/useCheckNetwork"
import { toast } from "react-toastify"
import { useWeb3Drops } from "@/providers/Web3Provider"

const useCollectAll = () => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const { collectAll } = useWeb3Drops()

  const onClick = async () => {
    if (!signer) {
      openConnectModal()
      return false
    }
    if (!checkNetwork()) {
      return false
    }
    const response = await collectAll()
    toast.success("collected!")
    return response
  }

  return {
    onClick,
  }
}

export default useCollectAll
