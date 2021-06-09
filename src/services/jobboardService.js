import axios from "axios"

export default class JobboardService{
    getJobboards(){
        return axios.get("http://localhost:8080/api/jobBoard/getAllWithDto");
    }

}