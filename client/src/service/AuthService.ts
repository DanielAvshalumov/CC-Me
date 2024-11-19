import axios from 'axios'

const base = 'http://localhost:8080/auth'

class AuthService {

    getSession() {
        return axios.get(`${base}/me`, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

    logout() {
        return axios.get(base+'/logout', {headers: {'Content-Type':'application/json'}, withCredentials:true});
    }
}

export default new AuthService();