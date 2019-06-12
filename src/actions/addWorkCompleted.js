import * as Types from '../constants/actionTypes'

export default (work) =>{
    return {
        type:Types.COMPLETE_WORK,
        work
    }
}