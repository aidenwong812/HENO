import LoadingPage from "@/components/LoadingPage"
import ContactProvider from "@/providers/ContactProvider"
import { usePageLoad } from "@/providers/PageLoadProvider"
import BaseLayout from "./BaseLayout"
import MobileLayout from "./MobileLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
  mobile: MobileLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]
  const { entered } = usePageLoad()

  return (
    <ContactProvider>
      {entered ? <Container>{children}</Container> : <LoadingPage />}
    </ContactProvider>
  )
}

export default Layout
