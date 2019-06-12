import * as Types from '../constants/actionTypes';

export default (work) =>{
    return {
        type:Types.FIX_WORK,
        work
    }
}