import axios from 'axios'

const base = 'http://localhost:8080/s3'

class s3Service {

    uploadFile(file:any) {
        return axios.patch(base+`/upload`, file);
        // return fetch(base+'/upload', {method: "POST", body: file, headers:{'Content-Type':'multipart/form-data; boundary=kjhdaf873hjad'}})
    }   

}

export default new s3Service();