import axios from 'axios'
const journalApi = axios.create({
    baseURL:'https://vuejs-foxbel-music.herokuapp.com/'
    //baseURL:'http://localhost:8080/'
})
export default journalApi