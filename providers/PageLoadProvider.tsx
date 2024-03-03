import useLiveTime from "@/hooks/useLiveTime"
import { createContext, useContext, useMemo, useState, useEffect } from "react"

const PageLoadContext = createContext(null)

const PageLoadProvider = ({ children }) => {
  const [entered, setEntered] = useState(true)
  const { liveTime } = useLiveTime()

  useEffect(() => {
    const handlePageClick = () => setEntered(!entered)
    if (!entered) {
      window.addEventListener("click", handlePageClick)
    }

    return () => {
      window.removeEventListener("click", handlePageClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entered])

  const value = useMemo(
    () => ({
      entered,
      setEntered,
      liveTime,
    }),
    [entered, setEntered, liveTime],
  )

  return <PageLoadContext.Provider value={value}>{children}</PageLoadContext.Provider>
}

export const usePageLoad = () => {
  const context = useContext(PageLoadContext)
  if (!context) {
    throw new Error("usePageLoad must be used within a PageLoadProvider")
  }
  return context
}

export default PageLoadProvider
