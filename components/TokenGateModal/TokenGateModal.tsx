import { AiFillLock } from "react-icons/ai"
import Modal from "../Modal"

const TokenGateModal = ({ title = "Loading...", children }) => (
  <Modal
    id="unlock_modal"
    isVisible
    onClose={() => null}
    containerClassName="rounded-[30px] md:rounded-[56px] overflow-hidden bg-black
        drop-shadow-[2px_3px_2px_rgba(255,255,255,0.25)]"
    modalClassName="!z-[110]"
  >
    <div
      className="px-4 py-8 samsungS8:p-6 xs:p-8 xl:p-6 rounded-lg font-dresden
            flex-col flex justify-between items-center
            md:w-[692px] md:h-[528px]
            bg-black"
    >
      <div className="text-[30px] md:text-[65px] text-white uppercase">{title}</div>
      <AiFillLock size={100} color="white" />

      {children}
    </div>
  </Modal>
)

export default TokenGateModal
