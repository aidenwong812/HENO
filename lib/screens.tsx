import MusicContent from "../components/Pages/MusicPage/MusicContent"
import AboutContent from "../components/Pages/AboutPage/AboutContent"
import PressContent from "../components/Pages/PressPage/PressContent"
import Web3Content from "../components/Pages/Web3Page/Web3Content"
import ContactContent from "../components/Pages/ContactPage/ContactContent"

export const SCREENS = {
  ABOUT_SCREEN: {
    screenName: "ABOUT_SCREEN",
    href: "/about",
    screen: <AboutContent />,
  },
  MUSIC_SCREEN: {
    screenName: "MUSIC_SCREEN",
    href: "/music",
    screen: <MusicContent isPopup />,
  },
  WEB3_SCREEN: {
    screenName: "WEB3_SCREEN",
    href: "/web3",
    screen: <Web3Content isPopup />,
  },
  PRESS_SCREEN: {
    screenName: "PRESS_SCREEN",
    href: "/press",
    screen: <PressContent />,
  },
  CONTACT_SCREEN: {
    screenName: "CONTACT_SCREEN",
    href: "/contact",
    screen: <ContactContent />,
  },
}
