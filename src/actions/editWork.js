import * as Types from '../constants/actionTypes';

export const EditWork = (id) =>{
    return {
        type:Types.EDIT_WORK,
        id
    }
}