import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': '1e7cf55f1bmsh397ea82b455935ep1c06e4jsn884d72bbac97',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  },
});
export default api;
