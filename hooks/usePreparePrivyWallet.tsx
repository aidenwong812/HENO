import { usePrivy } from "@privy-io/react-auth"

const usePreparePrivyWallet = () => {
  const { ready, user, login } = usePrivy()

  const prepare = () => {
    if (!user && ready) {
      login()
      return false
    }
    return true
  }

  return { prepare }
}

export default usePreparePrivyWallet
