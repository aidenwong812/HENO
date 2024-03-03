import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER } from "@/lib/consts"
import { useCollection } from "onchain-magic"

const useZoraDropData = () => {
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS

  const { drops, priceValues, collectAll } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
  })

  return {
    drops,
    priceValues,
    collectAll,
  }
}

export default useZoraDropData
