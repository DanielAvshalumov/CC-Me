import axios from 'axios';

const base = 'http://localhost:8080/api/users/'
class UserService {

    getAllNonContractors() {
        return axios.get(base+'?iscontractor=false', {headers:{'Content-Type':'application/json'}});
    }
}

export default new UserService();