/* eslint-disable jsx-a11y/control-has-associated-label */
import useIsMobile from "../../hooks/useIsMobile"
import Icon from "../Core/Icon"

const SocialLinks = ({ className = "" }) => {
  const isMobile = useIsMobile()

  const iconSize = isMobile ? 16 : 20
  return (
    <div className={`w-full flex items-center justify-center gap-x-[5px] ${className}`}>
      <a
        href="https://open.spotify.com/artist/3mr6jeVpPIXBp8IMMb60aD"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="spotify" color="white" raw size={iconSize} />
      </a>
      <a href="https://tidal.com/browse/artist/9582021" target="_blank" rel="noreferrer">
        <Icon name="tidal" color="white" raw size={iconSize} />
      </a>
      <a href="https://music.apple.com/us/artist/heno/1352075132" target="_blank" rel="noreferrer">
        <Icon name="apple" color="white" raw size={iconSize} />
      </a>
      <a href="https://soundcloud.com/mynameisheno" target="_blank" rel="noreferrer">
        <Icon name="soundcloud" color="white" raw size={iconSize} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC3cM8JX39gmiNi7vSQX9KXQ"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="youtube" color="white" raw size={iconSize} />
      </a>
      <a href="https://www.facebook.com/mynameisheno/" target="_blank" rel="noreferrer">
        <Icon name="facebook" color="white" raw size={iconSize} />
      </a>
      <a href="https://www.instagram.com/mynameisheno/?hl=en" target="_blank" rel="noreferrer">
        <Icon name="instagram" color="white" raw size={iconSize} />
      </a>
      <a href="https://twitter.com/mynameisheno?lang=en" target="_blank" rel="noreferrer">
        <Icon name="twitter" color="white" raw size={iconSize} />
      </a>
      <a href="https://mynameisheno.bandcamp.com" target="_blank" rel="noreferrer">
        <Icon name="bandcamp" color="white" raw size={iconSize} />
      </a>
      <a href="https://audiomack.com/mynameisheno" target="_blank" rel="noreferrer">
        <Icon name="audiomack" color="white" raw size={iconSize} />
      </a>
    </div>
  )
}

export default SocialLinks
