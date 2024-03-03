import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../consts"

const getAccessToken = async (code) => {
  const codeVerifier = localStorage.getItem("code_verifier")
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: SPOTIFY_REDIRECT_URI,
    client_id: SPOTIFY_CLIENT_ID,
    code_verifier: codeVerifier,
  })
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  })
    .then(async (response) => {
      if (!response.ok) {
        // eslint-disable-next-line no-console
        console.error(response)
      }
      return response.json()
    })
    .then(async (data) => {
      localStorage.setItem("access_token", data.access_token)
      return data.access_token
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Error:", error)
    })
}

export default getAccessToken
