import getDefaultProvider from "./getDefaultProvider"

const getAddressForEns = async (ens) => {
  const provider = getDefaultProvider(1)
  const address = await provider.resolveName(ens)
  return address
}

export default getAddressForEns
