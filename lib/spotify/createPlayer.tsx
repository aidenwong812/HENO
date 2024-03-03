/* eslint-disable camelcase */
const createPlayer = (accessToken, { onReady }) => {
  const script = document.createElement("script")
  script.src = "https://sdk.scdn.co/spotify-player.js"
  script.async = true

  document.body.appendChild(script)

  const anyWin = window as any
  anyWin.onSpotifyWebPlaybackSDKReady = () => {
    const newPlayer = new anyWin.Spotify.Player({
      name: "Web Playback SDK",
      getOAuthToken: (cb) => {
        cb(accessToken)
      },
      volume: 0.5,
    })

    newPlayer.addListener("ready", ({ device_id }) => {
      onReady(device_id)
    })

    newPlayer.connect()
  }
}

export default createPlayer
