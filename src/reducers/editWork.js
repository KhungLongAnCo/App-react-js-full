import * as Types from '../constants/actionTypes';
let initialState = {

};

let findWork = (id, works) => {
    let result = -1;
    let length = works.length;
    for (let i = 0; i <length; i++){
        if(works[i].id === id){
            result = works[i];
        }
    }
    return result;
}

let myReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_WORK:
            let { id } = action;
            let works = JSON.parse(localStorage.getItem('works'));
            let work = findWork(id, works);
            state = work;
            return {...state};
        default:
            return { ...state };;
    }
}

export default myReducers;