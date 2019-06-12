import * as types from "../constants/config";
import axios from 'axios';
export default (enpoint, method, body) => {
    return axios({
        method: method,
        url: `${types.CALLER_API}${enpoint}`,
        data: body
    }).catch((err)=>{
        console.log(err);
    })
}