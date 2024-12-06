import axios from 'axios'

const base = 'http://localhost:8080'

class ApplicantService {
    
    getApplicantsByJob(jobId:any) {
        return axios.get(base+`/applicants/job/${jobId}`,{headers:{'Content-Type':'application/json'}});
    }

    decideMaybe(applicantId: any, decision: any) {
        return axios.post(base+`/applicants/decide/${applicantId}`, decision, {headers:{'Content-Type':'application/json'}});
    }
}

export default new ApplicantService();