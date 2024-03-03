/* eslint-disable jsx-a11y/control-has-associated-label */
import Media from "../../../Core/Media"
import musics from "../musics.json"

const MusicList = () => (
  <>
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
          containerClasses="w-[120px] aspect-[1/1] skew-y-[-5deg] rounded-[10px] overflow-hidden"
        />
      </a>
    ))}
  </>
)

export default MusicList
