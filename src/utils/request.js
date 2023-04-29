import axios from "axios";


const request = (url,method,data) =>{
    return axios({
        url,
        method,
        data,
        validateStatus:false
    })
}

export default request