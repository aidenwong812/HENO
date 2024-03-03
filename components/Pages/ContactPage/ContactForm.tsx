import { useRef } from "react"
import { useContact } from "../../../providers/ContactProvider"
import Form from "../../Core/Form"
import Input from "../../Core/Input"
import TextArea from "../../Core/TextArea"
import { validation } from "./validation"
import useIsMobile from "../../../hooks/useIsMobile"

const ContactForm = () => {
  const isMobile = useIsMobile()

  const {
    userName,
    setUserName,
    subject,
    setSubject,
    emailAddress,
    setEmailAddress,
    message,
    setMessage,
    handleSubmit,
  } = useContact()

  const inputClasses = `!w-[200px] md:!w-[400px] !text-[10px] md:!text-[20px] h-[32px] md:h-[44px]`
  const labelClasses = "uppercase text-[10px] md:text-[20px]"

  const buttonRef = useRef() as any

  const handleClick = () => {
    buttonRef.current.click()
  }

  return (
    <Form
      className="w-full flex flex-col gap-y-[20px] items-end"
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <div className="w-[200px] md:w-[400px] text-[10px] md:text-[22px]">
        <p>ALL BOOKING / INQUIRIES :</p>
        <p>HENOMGMT@GMAIL.COM</p>
      </div>
      <div className="flex items-start gap-[20px]">
        <p className={labelClasses}>Name</p>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="name"
          name="name"
          className={inputClasses}
          hookToForm
        />
      </div>
      <div className="flex items-start gap-[20px]">
        <p className={labelClasses}>Subject</p>
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClasses}
          id="subject"
          name="subject"
          hookToForm
        />
      </div>
      <div className="flex items-start gap-[20px]">
        <p className={labelClasses}>Email</p>
        <Input
          value={emailAddress}
          className={inputClasses}
          onChange={(e) => setEmailAddress(e.target.value)}
          id="emailAddress"
          name="emailAddress"
          hookToForm
        />
      </div>
      <div className="flex items-start gap-[20px]">
        <p className={labelClasses}>Message</p>
        <div>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="!w-[200px] md:!w-[400px] !text-[10px] md:!text-[20px]"
            id="message"
            name="message"
            rows={isMobile ? 2 : 5}
            hookToForm
          />
          <button
            className="text-white mt-[10px] border-gray_1 border-[2px] py-[5px] px-[20px]"
            type="submit"
            ref={buttonRef}
            onTouchStart={handleClick}
          >
            <p className={labelClasses}>Submit</p>
          </button>
        </div>
      </div>
    </Form>
  )
}

export default ContactForm
