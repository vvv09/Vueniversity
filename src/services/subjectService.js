import axios from 'axios'

const BACK_API_URL = 'http://localhost:8080'
const SUBJECT_API_URL = `${BACK_API_URL}/subjects`

class SubjectService {

    retrieveAll() {
        return axios.get(`${SUBJECT_API_URL}`);
    }

    retrieveItem(id) {
        return axios.get(`${SUBJECT_API_URL}/${id}`);
    }

    deleteItem(id) {
        return axios.delete(`${SUBJECT_API_URL}/${id}`);
    }

    updateItem(id, item) {
        return axios.put(`${SUBJECT_API_URL}/${id}`, item);
    }

    createItem(name) {
        return axios.post(`${SUBJECT_API_URL}`, name);
    }
}

export default new SubjectService()