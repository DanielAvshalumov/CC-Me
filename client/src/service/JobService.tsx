import axios from 'axios';

const base = "http://localhost:8080/jobs";

class JobService {

    getAllJobs() {
        return axios.get(base, {headers:{'Content-Type':'application/json'}})
    }

}

export default new JobService();