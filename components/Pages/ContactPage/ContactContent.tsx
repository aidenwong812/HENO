import RecBar from "../../RecBar"
import ContactForm from "./ContactForm"
import { useContact } from "../../../providers/ContactProvider"
import { SCREEN } from "../../../hooks/useContactData"
import ContactSuccess from "./ContactSuccess"

const ContactContent = () => {
  const { screenStatus } = useContact()

  return (
    <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
      <div
        className="border-[1px] border-darkgray text-gray_1 font-dresden 
            py-[25px] text-center
            flex items-center justify-center text-[16px] relative h-full
            text-[12px] md:text-[16px] relative"
      >
        <div
          className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
            px-[15px] md:px-[20px] flex flex-col gap-y-[5px] md:gap-y-[20px]"
        >
          {screenStatus === SCREEN.INPUT_MODE && <ContactForm />}
          {screenStatus === SCREEN.SUCCESS && <ContactSuccess />}
        </div>
        <RecBar />
      </div>
    </div>
  )
}

export default ContactContent
