import axios from 'axios'

const BACK_API_URL = 'http://localhost:8080'
const SUBJECT_API_URL = `${BACK_API_URL}/schedule`

class ScheduleService {

    retrieveAll() {
        return axios.get(`${SUBJECT_API_URL}`);
    }

}

export default new ScheduleService()