import axios from 'axios';

const base = "http://localhost:8080";

class JobService {

    login(credentials:{email: string, password: string}) {
        console.log('creds',credentials);
        return axios.post(base+'/auth/login', credentials, {headers:{'Content-Type':'application/json'}, withCredentials:true})
    }

    getAllJobs() {
        return axios.get(base+'/jobs', {headers:{'Content-Type':'application/json'}});
    }

    getJobsByField(field:string) {
        return axios.get(base+`/jobs/${field}`, {headers:{'Content-Type':'application.json'}});
    }

    getJobsByUser(id:number) {
        return axios.get(base+`/jobs/user?id=${id}`, {headers:{'Content-Type':'application/json'}, withCredentials:true})
    }

    create(body:any) {
        return axios.post(base+'/jobs/create', body, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

}

export default new JobService();