import { base, sepolia } from "@wagmi/core/chains"

export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
export const SPOTIFY_STATE_KEY = "spotify_auth_state"
export const RELIEF_TRACK_ID = "5aDNHHNXc16VktqV1gSq23"
export const HENO_ARTIST_ID = "3mr6jeVpPIXBp8IMMb60aD"
export const TITLE = ""
export const ARTIST = "HENO."
export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
export const BASE_MINTER = "0xFF8B0f870ff56870Dc5aBd6cB3E6E89c8ba2e062"
export const SEPOLIA_MINTER = "0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21"
export const HENO_EMAIL = "enjoy@onchainmagic.xyz"
export const GAS_LIMIT_PER_DROP = "175000"
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"

export const ONE_MILLISEOND = 1000
