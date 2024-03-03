import useVideoPlayer from "../../hooks/useVideoPlayer"

const VideoPlayer = ({ src, isActive, nextDrop, selectedDrop, isPopup }) => {
  const { ref } = useVideoPlayer(nextDrop, selectedDrop)

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isActive && (
        <video
          src={src}
          preload="auto"
          controls
          playsInline
          webkit-playsinline
          x5-playsinline
          muted
          ref={ref}
          className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
        />
      )}
    </>
  )
}

export default VideoPlayer
