import { RELIEF_TRACK_ID } from "../consts"

const playTrack = async (accessToken, deviceId) => {
  await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
    method: "PUT",
    body: JSON.stringify({ uris: [`spotify:track:${RELIEF_TRACK_ID}`] }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default playTrack
