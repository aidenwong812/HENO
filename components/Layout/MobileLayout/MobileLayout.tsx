import React from "react"
import { ILayout } from "../types"
import Navbar from "../../Navbar"
import SocialLinks from "../../SocialLinks"

const MobileLayout = ({ children }: ILayout) => (
  <div className="w-screen h-screen p-[10px]">
    <div className="flex flex-col gap-y-[5px]">
      <Navbar />
      <div className="flex-grow h-[calc(100vh-65px)]">{children}</div>
      <SocialLinks />
    </div>
  </div>
)

export default MobileLayout
