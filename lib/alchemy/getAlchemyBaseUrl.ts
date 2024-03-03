import { base, baseGoerli, polygon } from "@wagmi/core/chains"

const ETH = "https://eth-mainnet.g.alchemy.com/"
const GOERLI = "https://eth-goerli.g.alchemy.com/"
const POLYGON = "https://polygon-mainnet.g.alchemy.com/"
const BASE = "https://base-mainnet.g.alchemy.com/"
const BASE_GOERLI = "https://base-goerli.g.alchemy.com/"

const getAlchemyBaseUrl = (chainId: number) => {
  switch (chainId) {
    case 1:
      return ETH
    case 5:
      return GOERLI
    case base.id:
      return BASE
    case baseGoerli.id:
      return BASE_GOERLI
    case polygon.id:
      return POLYGON
    default:
      return ETH
  }
}

export default getAlchemyBaseUrl
