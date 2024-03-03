import { RELIEF_TRACK_ID } from "../consts"

const saveTrack = async (accessToken) => {
  await fetch(`https://api.spotify.com/v1/me/tracks?ids=${RELIEF_TRACK_ID}`, {
    method: "PUT",
    body: JSON.stringify({ ids: [RELIEF_TRACK_ID] }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default saveTrack
