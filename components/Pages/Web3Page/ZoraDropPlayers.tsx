import VideoPlayer from "../../VideoPlayer"
import data from "../../../lib/zora-drops"
import { useWeb3Drops } from "../../../providers/Web3Provider"

const ZoraDropPlayers = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useWeb3Drops()

  return (
    <>
      {data.map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={selectedDrop === i}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
    </>
  )
}

export default ZoraDropPlayers
