import { createContext, useContext, useMemo } from "react"
import useZoraDropPlayers from "../hooks/useZoraDropPlayers"
import useZoraDropData from "@/hooks/useZoraDropData"

const Web3DropsContext = createContext(null)

const Web3Provider = ({ children }) => {
  const zoraDropPlayerData = useZoraDropPlayers()
  const zoraDropData = useZoraDropData()

  const value = useMemo(
    () => ({
      ...zoraDropData,
      ...zoraDropPlayerData,
    }),
    [zoraDropData, zoraDropPlayerData],
  )

  return <Web3DropsContext.Provider value={value}>{children}</Web3DropsContext.Provider>
}

export const useWeb3Drops = () => {
  const context = useContext(Web3DropsContext)
  if (!context) {
    throw new Error("useWeb3Drops must be used within a Web3Provider")
  }
  return context
}

export default Web3Provider
