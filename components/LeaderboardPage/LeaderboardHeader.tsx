const LeaderboardHeader = () => (
  <thead className="border-b-[2px] border-black border-solid">
    <tr>
      <th
        className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]
                    md:min-w-[100px]"
      >
        Rank
      </th>
      <th
        className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]
                    w-[100px] xs:!w-[130px] md:!w-[200px]"
      >
        Score
      </th>
      <th
        className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]"
      >
        Name
      </th>
      <th
        className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]"
      >
        Address
      </th>
    </tr>
  </thead>
)

export default LeaderboardHeader
