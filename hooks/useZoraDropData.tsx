import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER, ZORA_DROP_ADDRESS } from "@/lib/consts"
import { useCollection } from "onchain-magic"

const useZoraDropData = () => {
  const { drops, priceValues, collectAll } = useCollection({
    collectionAddress: ZORA_DROP_ADDRESS,
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
