import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"
import "@progress/kendo-theme-default/dist/all.css"

import type { AppProps } from "next/app"
import { RainbowKitProvider, darkTheme, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import Swiper, { Mousewheel } from "swiper"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import UserProvider from "@/providers/UserProvider"
import { ThemeProvider } from "../providers/ThemeProvider"
import { CHAIN, TITLE } from "../lib/consts"
import PageLoadProvider from "../providers/PageLoadProvider"
import PopupWidgetProvider from "../providers/PopupWidgetProvider"
import Web3Provider from "../providers/Web3Provider"

Swiper.use([Mousewheel])

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [CHAIN],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: TITLE,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_KEY,
  chains,
})

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const privyConfig: PrivyClientConfig = {
  loginMethods: ["email", "wallet"],
  appearance: {
    theme: "dark",
    accentColor: "#FFFFFF",
    logo: "/images/Landing/music.png",
  },
  embeddedWallets: {
    createOnLogin: "all-users",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        chains={chains}
        theme={darkTheme({
          accentColor: "#ca4342",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
          <UserProvider>
            <PageLoadProvider>
              <PopupWidgetProvider>
                <ThemeProvider>
                  <SessionProvider>
                    <Web3Provider>
                      <Component {...pageProps} />
                      <ToastContainer />
                      <Analytics />
                    </Web3Provider>
                  </SessionProvider>
                </ThemeProvider>
              </PopupWidgetProvider>
            </PageLoadProvider>
          </UserProvider>
        </PrivyProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
