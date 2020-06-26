import axios from 'axios';

export default {
    getUser () {
        return axios.get('/api/user')
            .then(
            response => {
                return response.data
            });
    }
}
