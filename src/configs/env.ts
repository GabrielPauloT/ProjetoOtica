export const env: ImportMetaEnv = {
    BASE_URL: import.meta.env.BASE_URL,
    MODE: import.meta.env.MODE,
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
    SSR: import.meta.env.SSR,
    URL_API: String(import.meta.env.VITE_URL_API),
  }
  