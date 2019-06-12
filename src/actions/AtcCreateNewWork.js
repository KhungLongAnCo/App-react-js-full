import { CREATE_NEW_WORK } from '../constants/actionTypes';

export const CreateNewWorks = (work) => {
    return {
        type: CREATE_NEW_WORK,
        work
    }
}
