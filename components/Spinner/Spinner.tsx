import { motion } from "framer-motion"
import { useAccount } from "wagmi"
import Zorb from "../Zorb"

const Spinner = ({ size = 50 }) => {
  const { address } = useAccount()

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <Zorb height={size} width={size} address={address} />
    </motion.div>
  )
}

export default Spinner
