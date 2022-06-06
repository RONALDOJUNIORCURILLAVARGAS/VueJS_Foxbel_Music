import axios from 'axios'
const journalApi = axios.create({
    baseURL:'http://vuejs-foxbel-music.herokuapp.com/http://api.deezer.com/'
    //https://vuejs-foxbel-music.herokuapp.com
    //baseURL:'http://api.deezer.com/'
    //baseURL:'http://localhost:8080/'
})
export default journalApi