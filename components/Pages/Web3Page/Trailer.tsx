import { usePrivy } from "@privy-io/react-auth"
import LogoutButton from "@/components/LogoutButton"
import Media from "@/components/Core/Media"
import ZoraDropPlayers from "./ZoraDropPlayers"
import Buttons from "./Buttons"

const Trailer = ({ isPopup = false }) => {
  const { authenticated } = usePrivy()
  const lensIconSize = isPopup ? "w-[20px] md:w-[40px]" : "w-[25px] md:w-[55px]"
  const zoraIconSize = isPopup ? "w-[15px] md:w-[30px]" : "w-[18px] md:w-[40px]"
  const soundIconSize = isPopup ? "w-[15px] md:w-[30px]" : "w-[18px] md:w-[40px]"
  const catalogIconSize = isPopup ? "w-[18px] md:w-[40px]" : "w-[20px] md:w-[50px]"

  return (
    <div className="h-fit max-h-full overflow-y-auto w-full">
      <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[20px]">
        <div className="flex flex-col gap-y-[10px]">
          <ZoraDropPlayers isPopup={isPopup} />
          <Buttons />
          {authenticated && <LogoutButton />}
        </div>
        <div className="flex gap-x-[15px] md:gap-x-[40px] items-end">
          <a href="https://hey.xyz/u/mynameisheno" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/LENS.svg"
                blurLink="/images/Web3/LENS.png"
                containerClasses={`aspect-[516/327] ${lensIconSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">LENS</p>
            </div>
          </a>
          <a href="https://zora.co/heno.eth" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/ZORA.svg"
                blurLink="/images/Web3/ZORA.png"
                containerClasses={`aspect-[1/1] ${zoraIconSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">ZORA</p>
            </div>
          </a>
          <a href="https://www.sound.xyz/heno" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/SOUND.svg"
                blurLink="/images/Web3/SOUND.png"
                containerClasses={`aspect-[1/1] ${soundIconSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">SOUND.XYZ</p>
            </div>
          </a>
          <a href="https://beta.catalog.works/heno" target="_blank" rel="noreferrer">
            <div className="flex gap-y-[5px] items-center flex-col cursor-pointer">
              <Media
                type="image"
                link="/images/Web3/CATALOG.svg"
                blurLink="/images/Web3/CATALOG.png"
                containerClasses={`aspect-[357/278] ${catalogIconSize}`}
              />
              <p className="text-white text-[12px] md:text-[20px]">CATALOG</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Trailer
