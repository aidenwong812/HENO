import { createContext, useContext, useMemo } from "react"
import useContactData from "../hooks/useContactData"

const ContactContext = createContext(null)

const ContactProvider = ({ children }) => {
  const contactData = useContactData()

  const value = useMemo(
    () => ({
      ...contactData,
    }),
    [contactData],
  )

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}

export const useContact = () => {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}

export default ContactProvider
