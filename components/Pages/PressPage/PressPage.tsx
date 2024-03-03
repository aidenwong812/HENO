import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import PressContent from "./PressContent"

const PressPage = () => {
  const isMobile = useIsMobile()
  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. PRESS" image="/images/Landing/press.jpeg" />
      <PressContent />
    </Layout>
  )
}

export default PressPage
