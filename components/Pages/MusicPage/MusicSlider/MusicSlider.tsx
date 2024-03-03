/* eslint-disable jsx-a11y/control-has-associated-label */
import Media from "../../../Core/Media"
import Slider from "../../../Core/Slider"
import musics from "../musics.json"

const MusicSlider = ({ isPopup }) => (
  <Slider
    className="!overflow-hidden w-full !py-[20px]"
    sliderProps={{
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      breakpoints: {
        1560: {
          slidesPerView: isPopup ? 2 : 4,
        },
        1340: {
          slidesPerView: isPopup ? 2 : 4,
        },
        1060: {
          slidesPerView: isPopup ? 2 : 4,
        },
      },
      mousewheel: {
        sensitivity: 1,
      },
    }}
  >
    {musics.map((music, index) => (
      <a
        href={music.link}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        target="_blank"
        rel="noreferrer"
      >
        <Media
          type="image"
          blurLink={music.assets}
          link={music.assets}
          containerClasses="w-[200px] aspect-[1/1] skew-y-[-5deg] rounded-[10px] overflow-hidden"
        />
      </a>
    ))}
  </Slider>
)

export default MusicSlider
