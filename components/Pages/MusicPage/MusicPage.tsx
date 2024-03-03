import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import MusicContent from "./MusicContent"

const MusicPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. MUSIC" image="/images/Landing/music.png" />
      <MusicContent />
    </Layout>
  )
}

export default MusicPage
