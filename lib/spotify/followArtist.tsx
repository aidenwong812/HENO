import { HENO_ARTIST_ID } from "../consts"

const followArtist = async (accessToken) => {
  await fetch(`https://api.spotify.com/v1/me/following?type=artist&ids=${HENO_ARTIST_ID}`, {
    method: "PUT",
    body: JSON.stringify({ ids: [HENO_ARTIST_ID] }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default followArtist
