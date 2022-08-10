import api from './apisauce'
import { endpoints } from './index';

export type postContactMeData = {
  name: string;
  email: string;
  text: string;
}
export const postContactMe = (data: postContactMeData, ...args: any) => api.post(`${endpoints.emailService}/contact-me`, data, ...args);