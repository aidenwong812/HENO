import { usePageLoad } from "@/providers/PageLoadProvider"
import DraggableModal from "@/components/Core/DraggableModal"
import { useEffect, useState } from "react"
import LandingCard from "../../LandingCard"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import useIsMobile from "../../../hooks/useIsMobile"
import { SCREENS } from "../../../lib/screens"
import { usePopupWidget } from "../../../providers/PopupWidgetProvider"
import YoutubeContent from "../YoutubeContent"

const LandingPage = () => {
  const { openPopUp } = usePopupWidget()
  const { entered, setEntered } = usePageLoad()
  const isMobile = useIsMobile()
  const [isOpenYoutubeModal, setIsOpenYoutubeModal] = useState(true)

  useEffect(() => {
    setEntered(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. HOME" />
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-y-[10px] md:gap-[20px] 
        h-[calc(100%-40px)] md:h-full ${!entered ? "hidden" : ""}`}
      >
        <LandingCard
          title="ABOUT"
          img="/images/Landing/about.jpeg"
          onClick={() => openPopUp(SCREENS.ABOUT_SCREEN.screenName)}
          cctvNumber={1}
        />
        <LandingCard
          title="MUSIC"
          img="/images/Landing/music.png"
          onClick={() => openPopUp(SCREENS.MUSIC_SCREEN.screenName)}
          cctvNumber={2}
        />
        <LandingCard
          title="WEB 3"
          img="/images/Landing/web3.jpeg"
          onClick={() => openPopUp(SCREENS.WEB3_SCREEN.screenName)}
          cctvNumber={3}
        />
        <LandingCard
          title="PRESS"
          img="/images/Landing/press.jpeg"
          onClick={() => openPopUp(SCREENS.PRESS_SCREEN.screenName)}
          cctvNumber={4}
        />
      </div>
      {isMobile && (
        <a
          type="button"
          className="w-full bg-gray_1 font-dresden h-[35px] mt-[5px]
        flex justify-center items-center"
          href="https://play.mynameisheno.com/"
          target="_blank"
          rel="noreferrer"
        >
          Play Relief
        </a>
      )}
      {isOpenYoutubeModal && (
        <DraggableModal
          href="/"
          handleClose={() => setIsOpenYoutubeModal(!isOpenYoutubeModal)}
          isVisible={isOpenYoutubeModal}
        >
          <YoutubeContent />
        </DraggableModal>
      )}
    </Layout>
  )
}

export default LandingPage
