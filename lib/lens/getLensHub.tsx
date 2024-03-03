import { Contract } from "ethers"
import abi from "../abi/abi-LensHub.json"
import getDefaultProvider from "../getDefaultProvider"

const getLensHub = () => {
  const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"
  const contract = new Contract(address, abi, getDefaultProvider(137))
  return contract
}

export default getLensHub
