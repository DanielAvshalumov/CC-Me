import axios from 'axios';

const base = 'http://localhost:8080/api/users/'
class UserService {

    getAllNonContractors() {
        return axios.get(base+'?iscontractor=false', {headers:{'Content-Type':'application/json'}});
    }

    updateUser(body:any) {
        return axios.put(base+'update', body, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

    getUser(id:number) {
        return axios.get(base+id, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }
}

export default new UserService();