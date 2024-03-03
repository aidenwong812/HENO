import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../consts"
import generateCodeChallenge from "./generateCodeChallenge"
import generateRandomString from "./generateRandomString"

const login = () => {
  const clientId = SPOTIFY_CLIENT_ID
  const redirectUri = SPOTIFY_REDIRECT_URI

  const codeVerifier = generateRandomString(128)

  generateCodeChallenge(codeVerifier).then((codeChallenge) => {
    const state = generateRandomString(16)
    const scope = "user-read-private user-read-email streaming"

    localStorage.setItem("code_verifier", codeVerifier)

    const args = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      state,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    })

    window.location = `https://accounts.spotify.com/authorize?${args}` as any
  })
}

export default login
