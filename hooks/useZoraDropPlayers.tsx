import { useState } from "react"
import data from "../lib/zora-drops"

const useZoraDropPlayers = () => {
  const [selectedDrop, setSelectedDrop] = useState(0)

  const nextDrop = () => {
    if (selectedDrop === data.length - 1) {
      setSelectedDrop(0)
      return
    }

    setSelectedDrop(selectedDrop + 1)
  }

  return {
    selectedDrop,
    nextDrop,
  }
}

export default useZoraDropPlayers
