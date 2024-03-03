import CollectAllButton from "@/components/CollectAllButton"
import CrossmintButton from "../../CrossmintButton"

const Buttons = () => (
  <div className="flex gap-[10px] items-center flex-col md:flex-row justify-center">
    <CollectAllButton />
    <CrossmintButton />
  </div>
)

export default Buttons
