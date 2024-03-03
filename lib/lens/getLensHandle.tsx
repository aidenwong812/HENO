import getAddressForEns from "../getAddressForEns"
import getLensHub from "./getLensHub"

const getLensHandle = async (address) => {
  try {
    let ensAddress
    if (address.includes(".eth")) {
      ensAddress = await getAddressForEns(address)
    }
    const contract = getLensHub()
    const tokenId = await contract.defaultProfile(ensAddress || address)
    const handle = await contract.getHandle(tokenId)
    return handle
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return false
  }
}

export default getLensHandle
