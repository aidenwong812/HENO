import { useState } from "react"
import sendContactRequest from "../lib/sendContactRequest"

export enum SCREEN {
  INPUT_MODE = "INPUT_MODE",
  SUCCESS = "SUCCESS",
}

const useContactData = () => {
  const [userName, setUserName] = useState("")
  const [subject, setSubject] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [message, setMessage] = useState("")
  const [screenStatus, setScreenStatus] = useState(SCREEN.INPUT_MODE)

  const handleSubmit = async () => {
    const response: any = await sendContactRequest({
      name: userName,
      subject,
      emailAddress,
      message,
    })
    if (response?.error) {
      return
    }
    setScreenStatus(SCREEN.SUCCESS)
  }

  return {
    userName,
    setUserName,
    subject,
    setSubject,
    emailAddress,
    setEmailAddress,
    message,
    setMessage,
    screenStatus,
    setScreenStatus,
    handleSubmit,
  }
}

export default useContactData
