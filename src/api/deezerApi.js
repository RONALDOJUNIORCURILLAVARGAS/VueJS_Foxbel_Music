import axios from 'axios'
const journalApi = axios.create({
    /* baseURL:'https://vuejs-foxbel-music.herokuapp.com/',
    app_id: '545462',
    redirect_uri: 'https://vuejs-foxbel-music.herokuapp.com/',
    secret:'5aad676831359ddbfae666c270957d1c', */
    baseURL:'http://localhost:8080/',
})
export default journalApi