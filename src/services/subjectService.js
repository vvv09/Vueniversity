import axios from 'axios'

const BACK_API_URL = 'http://localhost:8080'
const SUBJECT_API_URL = `${BACK_API_URL}/subjects`

class SubjectService {

    retrieveAll() {
        return axios.get(`${SUBJECT_API_URL}`);
    }

    // retrieveCourse(name, id) {
    //     //console.log('executed service')
    //     return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    // }
    //
    // deleteCourse(name, id) {
    //     //console.log('executed service')
    //     return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    // }
    //
    // updateCourse(name, id, course) {
    //     //console.log('executed service')
    //     return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    // }
    //
    // createCourse(name, course) {
    //     //console.log('executed service')
    //     return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    // }
}

export default new SubjectService()