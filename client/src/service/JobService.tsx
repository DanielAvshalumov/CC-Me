import axios from 'axios';

const base = "http://localhost:8080";

class JobService {

    login(credentials:{email: string, password: string}) {
        console.log('creds',credentials);
        return axios.post(base+'/auth/login', credentials, {headers:{'Content-Type':'application/json','Access-Control-Allow-Origins':'*'}})
    }

    getAllJobs() {
        return axios.get(base+'/jobs', {headers:{'Content-Type':'application/json'}});
    }

    getJobsByField(field:string) {
        return axios.get(base+`/jobs/${field}`, {headers:{'Content-Type':'application.json'}});
    }

}

export default new JobService();