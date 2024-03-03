import { FC } from "react"
import { ItemRenderProps } from "@progress/kendo-react-treeview"

const FeedItem: FC<ItemRenderProps> = ({ item }) => (
  <p className="font-dresden cursor-pointer">{item.text}</p>
)

export default FeedItem
