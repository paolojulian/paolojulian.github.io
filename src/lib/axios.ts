import apiSauce from 'apisauce';

const apiClient = apiSauce.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const emailService = apiSauce.create({
  baseURL: process.env.NEXT_PUBLIC_EMAIL_API_URL || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient;
