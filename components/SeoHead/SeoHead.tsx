import Head from "next/head"
import { TITLE } from "../../lib/consts"

const SeoHead = ({
  description = `WELCOME`,
  image = "/images/Landing/about.jpeg",
  title = TITLE,
}: any) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href={image} />
    <meta name="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@HENO" />
    <meta name="twitter:url" content="https://heno-website.vercel.app/" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:image" content={image} />
    <link rel="icon" href={image} />
    <link rel="apple-touch-icon" href={image} />
  </Head>
)

export default SeoHead
