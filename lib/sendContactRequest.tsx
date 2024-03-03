import axios from "axios"
import handleTxError from "./handleTxError"

const sendContactRequest = async (data) => {
  try {
    const response = await axios.post("/api/contact", { ...data })

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendContactRequest
