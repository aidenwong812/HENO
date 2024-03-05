import useConnectedWallet from "@/hooks/useConnectedWallet"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER, ZORA_DROP_ADDRESS } from "@/lib/consts"
import { useWeb3Drops } from "@/providers/Web3Provider"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { BigNumber } from "ethers"
import { useUniversalMinter } from "onchain-magic"
import { formatEther } from "viem"

const CrossmintButton = () => {
  const { connectedWallet } = useConnectedWallet()
  const { drops, priceValues } = useWeb3Drops()
  const { universalMinter } = useUniversalMinter(CHAIN_ID)
  const totalValue = priceValues.reduce(
    (total: any, value: any) => total.add(BigNumber.from(value || "0")),
    BigNumber.from(0),
  )

  return (
    <CrossmintPayButton
      collectionId={process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}
      projectId={process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID}
      mintConfig={{
        totalPrice: totalValue && formatEther(totalValue),
        _universalMinter: universalMinter,
        _target: ZORA_DROP_ADDRESS,
        _value: priceValues[0],
        _tokenCount: drops.length,
        _referral: process.env.NEXT_PUBLIC_MINT_REFERRAL,
        _minter: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
      }}
      mintTo={connectedWallet}
      checkoutProps={{ paymentMethods: ["fiat"] }}
      environment="staging"
    />
  )
}

export default CrossmintButton
