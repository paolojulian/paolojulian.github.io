const ENVIRONMENTS = {
  EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'paolojulian.personal@gmail.com',
  EMAIL_APP_USERNAME: process.env.GMAIL_APP_USERNAME || '',
  EMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || ''
}

export default ENVIRONMENTS