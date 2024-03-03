import { useWallets } from "@privy-io/react-auth"

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const privyWallet = wallets?.find((wallet) => wallet.walletClientType === "privy")
  const metamaskWallet = wallets?.find((wallet) => wallet.walletClientType === "metamask")
  const connectedWallet = privyWallet?.address

  return { connectedWallet, privyWallet, metamaskWallet }
}

export default useConnectedWallet
