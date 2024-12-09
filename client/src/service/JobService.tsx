import axios from 'axios';
import { headers } from 'next/headers';

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
        return axios.get(base+`/jobs/user?id=${id}`, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

    create(body:any) {
        return axios.post(base+'/jobs/create', body, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

    complete(id:number) {
        return axios.post(base+`/jobs/complete/${id}`, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

    apply(id:number) {
        return axios.post(base+`/jobs/apply/${id}`, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    }

    getAppliedJobs(id:number) {
        return axios.get(base+`/jobs/sender/${id}`, {headers:{'Content-Type':'application/json'}, withCredentials:true});
    } 
}

export default new JobService();