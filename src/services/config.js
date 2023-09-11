import axios from 'axios'
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
export const http = axios.create({
    baseURL: 'http://127.0.0.1:3000/'
})

export const httpCorreios = axios.create({
    baseURL: 'https://viacep.com.br/'
})