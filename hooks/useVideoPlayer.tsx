import { useEffect, useRef } from "react"

const useVideoPlayer = (nextDrop, selectedDrop) => {
  const ref = useRef() as any

  useEffect(() => {
    if (ref.current) {
      const video = ref.current
      video.play()
      video.muted = true
      video.addEventListener("ended", nextDrop)
    }

    return () => {
      ref.current?.removeEventListener("ended", nextDrop)
    }
  }, [ref.current, selectedDrop])

  return {
    ref,
  }
}

export default useVideoPlayer
