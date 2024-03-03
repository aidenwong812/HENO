import LeaderboardAddress from "./LeaderboardAddress"

const LeaderboardRow = ({ address, numberOwned, rank, name }) => (
  <tr key={address} className="text-center bg-white hover:bg-blue-300">
    <td
      className="text-[8px] xs:text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
    >
      #{rank}
    </td>
    <td
      className="text-[8px] text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
    >
      {numberOwned}
    </td>
    <td
      className="text-[8px] text-[11px] md:text-[16px]
        p-[5px] md:px-4 md:py-2 border-r-2 border-black"
    >
      {name}
    </td>
    <LeaderboardAddress address={address} />
  </tr>
)

export default LeaderboardRow
