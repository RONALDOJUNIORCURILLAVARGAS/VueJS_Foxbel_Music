import axios from 'axios'
const journalApi = axios.create({
    /* baseURL:'http://localhost:8080/', */
   // baseURL:'https://starlit-lokum-cf75cb.netlify.app',
    baseURL:'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': 'e2f9d5cdcdmshe3af8e1a48b083cp1b7481jsn160a9a0fa4c6'
      }
})
export default journalApi