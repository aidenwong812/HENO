import Trailer from "./Trailer"
import RecBar from "../../RecBar"
import useIsMobile from "../../../hooks/useIsMobile"
import { useWeb3Drops } from "../../../providers/Web3Provider"
import data from "../../../lib/zora-drops"

const Web3Content = ({ isPopup = false }) => {
  const isMobile = useIsMobile()
  const { selectedDrop } = useWeb3Drops()

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border-[1px] border-darkgray text-gray_1 font-dresden 
            py-[25px] text-center
            flex items-center justify-center text-[16px] relative h-full
            text-[12px] md:text-[16px] relative"
      >
        {!isMobile && (
          <div
            className={`absolute top-[35px] left-1 text-left md:left-2 capitalize ${
              isPopup ? "text-[14px]" : "text-[16px]"
            }`}
          >
            {data[selectedDrop].startedAt} <br />
            <p className="uppercase">{data[selectedDrop].title}</p>
            By {data[selectedDrop].artist}
          </div>
        )}
        <div
          className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
            px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px]"
        >
          <Trailer isPopup={isPopup} />
        </div>
        <RecBar cctvNumber={3} />
      </div>
    </div>
  )
}

export default Web3Content
