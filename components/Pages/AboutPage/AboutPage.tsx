import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import AboutContent from "./AboutContent"

const AboutPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. ABOUT" image="/images/Landing/about.jpeg" />
      <AboutContent />
    </Layout>
  )
}

export default AboutPage
