import axios from 'axios'
const journalApi = axios.create({
    baseURL:'http://localhost:8080/'
})
export default journalApi