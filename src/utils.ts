export const envVariablesRequired: String[] = [
    "SMTP_NAME",
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USERNAME",
    "SMTP_PASSWORD",
    "SMTP_TLS_CIPHERS",
]

export const getAuth = () => {
  return (
    process.env.SMTP_USERNAME ? 
    {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    } : 
    undefined)
}

export const getTls = () => {
  return (
    process.env.SMTP_SECURE == 'true' ? 
      (
          process.env.SMTP_TLS_CIPHERS ?
              {
                  ciphers: process.env.SMTP_CIPHERS
              } : 
              undefined
      ) : 
    {
        rejectUnauthorized: false
    }
  )
}