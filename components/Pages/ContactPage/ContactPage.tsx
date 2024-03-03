import useIsMobile from "../../../hooks/useIsMobile"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import ContactContent from "./ContactContent"

const ContactPage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="HENO. Contact" image="/images/Landing/web3.jpeg" />
      <ContactContent />
    </Layout>
  )
}

export default ContactPage
