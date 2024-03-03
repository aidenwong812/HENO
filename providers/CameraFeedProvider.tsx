import { createContext, useContext, useMemo } from "react"
import feedsData from "./feeds.json"

const CameraFeedContext = createContext(null)

const CameraFeedProvider = ({ children }) => {
  const wrapTreeViewItems = (items) => {
    return items.map((item) => {
      return { ...item, items: item.items && wrapTreeViewItems(item.items) }
    })
  }

  const feeds = useMemo(() => {
    return wrapTreeViewItems(feedsData)
  }, [feedsData])

  const onExpandChange = (event) => {
    event.item.expanded = !event.item.expanded
  }

  const value = useMemo(
    () => ({
      feeds,
      onExpandChange,
    }),
    [feeds, onExpandChange],
  )

  return <CameraFeedContext.Provider value={value}>{children}</CameraFeedContext.Provider>
}

export const useCameraFeed = () => {
  const context = useContext(CameraFeedContext)
  if (!context) {
    throw new Error("useCameraFeed must be used within a CameraFeedProvider")
  }
  return context
}

export default CameraFeedProvider
