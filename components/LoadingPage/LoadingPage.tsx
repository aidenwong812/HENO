import Image from "next/image"
import useIsMobile from "../../hooks/useIsMobile"

const LoadingPage = () => {
  const isMobile = useIsMobile()

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <Image
        blurDataURL={isMobile ? "/images/Loading/m_loading.png" : "/images/Loading/loading.png"}
        alt="SYSTEM"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        src={isMobile ? "/images/Loading/m_loading.png" : "/images/Loading/loading.png"}
      />
    </div>
  )
}

export default LoadingPage
