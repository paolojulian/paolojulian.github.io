import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: '/',
  headers: { Accept: 'application/json' }
})

export default api;