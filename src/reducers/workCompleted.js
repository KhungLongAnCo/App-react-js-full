import * as Types from '../constants/actionTypes';

let works = JSON.parse(localStorage.getItem('worksCompleted'));
let initialState = works ? works : [];

let findIndex = (workFix, works) => {
    let result = -1;
    let length = works.length;
    for (let i = 0; i < length; i++) {
        if (works[i].id === workFix.id) {
            result = i;
        }
    }
    return result;
}

let myReducers = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.DELETE_WORK:
            index = findIndex({ id: action.id }, state);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('worksCompleted', JSON.stringify(state));
            return [...state];
        case Types.GET_WORK_COMPLETE:
            state = JSON.parse(localStorage.getItem('worksCompleted'));
        return [...state];
        default: return state;
    }
}
export default myReducers;