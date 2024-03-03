import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { ethers } from "ethers"
import { useAccount } from "wagmi"

const CrossmintButton = () => {
  const totalPriceEth = ethers.utils.formatEther("150000")
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { address } = useAccount()

  const mintConfig = {
    type: "erc-721",
    _targetERC721ContractAddress: zoraDropAddress,
    totalPrice: totalPriceEth,
    quantity: 1,
    to: address,
  }

  return (
    <CrossmintPayButton
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
      environment="staging"
      getButtonText={(connecting) => (connecting ? "Connecting" : `Collect with Credit`)}
      mintConfig={mintConfig}
      paymentMethod="fiat"
      className="heno-crossmint-button"
      mintTo={address}
      successCallbackURL={typeof window !== "undefined" && `${window.location.origin}/web3`}
    />
  )
}

export default CrossmintButton
