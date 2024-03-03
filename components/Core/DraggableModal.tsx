/* eslint-disable jsx-a11y/control-has-associated-label */
import Draggable from "react-draggable"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Icon from "./Icon"

const DraggableModal = ({ children, href, handleClose, isVisible = null }) => {
  const router = useRouter()

  const handleExpand = () => {
    handleClose()
    router.push(href)
  }

  return (
    <div className="fixed z-[9999] left-0 top-0 w-screen h-screen">
      <div className="relative w-full h-full flex justify-center items-center">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className="w-full h-full
        absolute left-0 top-0 z-[1]"
          onClick={handleClose}
        />
        <Draggable scale={1} bounds="parent">
          <div className="w-[90%] md:w-[50%] h-[70%] relative z-[1000]">
            <motion.div
              className="flex flex-col bg-black
            h-full w-full 
            p-[10px] md:px-[20px] py-[10px]"
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className="flex justify-start pb-[10px] gap-x-[20px]">
                <div className="flex items-center gap-x-[5px]">
                  <button type="button" onClick={handleClose} onTouchStart={handleClose}>
                    <Icon name="close" className="text-gray_1" size={20} raw />
                  </button>
                  <button type="button" onClick={handleExpand} onTouchStart={handleExpand}>
                    <Icon name="expand" className="text-gray_1" size={20} raw />
                  </button>
                </div>
                <div className="flex-grow flex flex-col gap-y-[8px] justify-center">
                  <div className="w-full h-[1.5px] bg-gray" />
                  <div className="w-full h-[1.5px] bg-gray" />
                </div>
              </div>
              <div className="h-[calc(100%-35px)]">{children}</div>
            </motion.div>
          </div>
        </Draggable>
      </div>
    </div>
  )
}

export default DraggableModal
