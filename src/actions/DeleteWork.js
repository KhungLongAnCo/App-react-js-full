import * as Types from '../constants/actionTypes';

export default (id)=>{
    return{
        type:Types.DELETE_WORK,
        id
    }
}