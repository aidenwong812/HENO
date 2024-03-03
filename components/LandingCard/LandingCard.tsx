import Image from "next/image"
import getDateTimeString from "@/lib/getDateTimeString"
import { usePageLoad } from "@/providers/PageLoadProvider"
import Icon from "../Core/Icon"

const LandingCard = ({ title, img = "/images/Landing/web3.jpg", onClick, cctvNumber = 1 }) => {
  const { liveTime } = usePageLoad()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="p-[5px] md:p-2 border-[2px] border-gray_1 cursor-pointer font-dresden"
      onClick={onClick}
    >
      <div className="relative p-[10px] md:p-4 flex flex-col items-center justify-center border-darkgray border h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={img}
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-[black] opacity-[0.75]" />
        <div className="absolute top-1 left-1 md:top-2 md:left-2 z-20">
          <p className="text-[white] text-[10px] md:text-xs">CCTV 00{cctvNumber}</p>
        </div>
        <div className="absolute top-1 right-1 md:top-2 md:right-2 z-20 flex items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[red] rounded-full mr-2" />
          <p className="text-[white] text-[10px] md:text-xs mr-2">REC</p>
          <Icon name="wifi" raw size={16} color="white" />
        </div>
        <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 z-20">
          <p className="text-[white] text-[10px] md:text-xs">DUR : 08:13:24:53</p>
        </div>
        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 z-20">
          <p className="text-[white] text-[10px] md:text-xs">{getDateTimeString(liveTime)}</p>
        </div>
        <div className="relative z-10 p-2 md:p-6">
          <h2 className="text-[white] text-[24px] md:text-5xl font-bold mb-2">{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default LandingCard
