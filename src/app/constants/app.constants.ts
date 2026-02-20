export const APP_CONSTANTS = {
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 25, 50],
  },
  auth: {
    tokenRefreshThreshold: 5 * 60 * 1000, // 5 min
  },
} as const;

export const STORAGE_KEYS = {
  accessToken:  'access_token',
  refreshToken: 'refresh_token',
  currentUser:  'current_user',
} as const;

export const API_ENDPOINTS = {
  auth: {
    login:   '/auth/token/',
    refresh: '/auth/token/refresh/',
    logout:  '/auth/logout/',
  },
  users: {
    me: '/users/me/',
  },
} as const;
