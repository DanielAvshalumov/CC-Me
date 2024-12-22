import axios from 'axios'

const base = 'http://localhost:8080/s3'

class s3Service {

    uploadFile(file:any,id:number) {
        return axios.patch(base+`/upload?id=${id}`, file);
    }   

}

export default new s3Service();