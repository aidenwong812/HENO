import { TreeView } from "@progress/kendo-react-treeview"
import FeedItem from "../FeedItem"
import { useCameraFeed } from "../../providers/CameraFeedProvider"

const CameraFeed = () => {
  const { feeds, onExpandChange } = useCameraFeed()

  return <TreeView data={feeds} item={FeedItem} onExpandChange={onExpandChange} expandIcons />
}

export default CameraFeed
