/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
const truncateEthAddress = (address: string) => {
  if (address.length <= 15) return address
  return `${address.slice(0, 5)}...${address.slice(-4)}`
}

export default truncateEthAddress
