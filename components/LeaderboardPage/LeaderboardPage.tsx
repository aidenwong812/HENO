import { useEffect, useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import LeaderboardRow from "./LeaderboardRow"
import SkeletonTableBody from "./SkeletonTableBody"
import SeoHead from "../SeoHead"
import { getLeaderboard } from "../../lib/firebase/firebase"
import LeaderboardHeader from "./LeaderboardHeader"
import { ARTIST, TITLE } from "../../lib/consts"

const LeaderboardPage = () => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getLeaderboard()
      setScores(response)
    }
    init()
  }, [])

  return (
    <div className="w-full  mx-auto font-dresden ">
      <SeoHead title="Leaderboard" />
      <div
        className="
          text-white text-center 
          text-[40px] md:text-[100px] 
          font-bold
        "
      >
        Leaderboard
      </div>
      <div className="w-full flex justify-center pb-4">
        <div
          className="font-quicksand 
            text-white text-center 
            w-[300px] xs:w-[350px] md:w-[430px] 
            text-[13px] xs:text-[15px] md:text-[18px] 
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)] 
            font-[500]"
        >
          {TITLE} by {ARTIST}
        </div>
      </div>
      <div className="w-full flex justify-center pb-4">
        <ConnectButton label="sign in" />
      </div>
      <div className="md:px-4 w-full flex justify-center">
        <div
          className="w-[310px] xs:w-[370px] md:w-full 
            border-[2px] border-[black] border-solid
            h-[470px] rounded-lg 
            overflow-auto 
            shadow-[4px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[4px_4px_4px_rgb(255,255,255,0.25)]
            scrollbar scrollbar-thumb-[black] 
            scrollbar-track-white 
            scrollbar-thumb-rounded-full"
        >
          <table className="w-full font-quicksand bg-white">
            <LeaderboardHeader />
            {scores.length > 0 ? (
              <tbody>
                {scores.map((collector, index) => (
                  <LeaderboardRow
                    key={collector.wallet}
                    address={collector.wallet}
                    name={collector.name}
                    numberOwned={collector.score}
                    rank={index + 1}
                  />
                ))}
              </tbody>
            ) : (
              <SkeletonTableBody />
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardPage
