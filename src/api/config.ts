// Config
export const ROOT_URL: string = process.env.REACT_APP_API_URL ?? ''
export const FEED_URL: string = ROOT_URL ? `${ROOT_URL}/feed` : ''
export const AUTH_URL: string = ROOT_URL ? `${ROOT_URL}/live` : ''
export const AUTH_TOKEN_KAY: string = 'token'
