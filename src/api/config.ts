// Config
export const ROOT_URL: string | undefined = process.env.REACT_APP_API_URL
export const FEED_URL: string = ROOT_URL ? `${ROOT_URL}/rtx/api/feed` : ''
export const AUTH_URL: string = ROOT_URL ? `${ROOT_URL}/rtx/api/live` : ''
export const AUTH_TOKEN_KAY: string = 'token'
