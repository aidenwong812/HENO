import data from "../../../lib/press-data"
import RecBar from "../../RecBar"

const PressContent = () => (
  <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
    <div
      className="border-[1px] border-darkgray text-gray_1 font-dresden 
          py-[35px] text-center
          flex items-center justify-center text-[16px] relative h-full
          text-[12px] md:text-[16px]"
    >
      <div
        className="h-fit max-h-full overflow-y-auto text-[12px] md:text-[16px]
          p-[15px] md:p-[20px] gap-[30px]
          grid grid-cols-1 md:grid-cols-2 w-full"
      >
        {data.map((pressItem) => (
          <a
            target="_blank"
            href={pressItem.link}
            className="flex justify-center h-full"
            key={pressItem.link}
            rel="noreferrer"
          >
            <div
              className="border-[2px] border-darkgray rounded-[24px] hover:border-gray
                    transition duration-[300ms]
                    w-full h-full max-w-[450px] flex flex-col items-center justify-center p-[30px]"
            >
              <p className="text-yellow font-dresden text-center text-[24px] md:text-[30px]">
                {pressItem.title}
              </p>
              <p className="text-center text-yellow font-dresden text-[9px] md:text-[11px]">
                {pressItem.content}
              </p>
            </div>
          </a>
        ))}
      </div>
      <RecBar cctvNumber={4} />
    </div>
  </div>
)

export default PressContent
