import axios from 'axios'

const api =  axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-type": "application/json"
  }
});

export default api;