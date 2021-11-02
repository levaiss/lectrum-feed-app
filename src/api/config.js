// Config

const isProduction = process.env.NODE_ENV === 'production';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const FEED_URL = isProduction ? `${ROOT_URL}/rtx/api/feed` : `${ROOT_URL}/feed`;
export const AUTH_URL = isProduction ? `${ROOT_URL}/rtx/api/live` : `${ROOT_URL}/live`;
