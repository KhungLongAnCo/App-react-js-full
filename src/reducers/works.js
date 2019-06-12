
import * as Types from '../constants/actionTypes';
import shortid from 'shortid';

let works = JSON.parse(localStorage.getItem('works'));
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
    switch (action.type) {
        case Types.CREATE_NEW_WORK:
            let newWork = {
                id: shortid.generate(),
                name: action.work.name,
                note: action.work.note,
                status: action.work.status
            }
            state.push(newWork);
            localStorage.setItem('works', JSON.stringify(state));
            return [...state];
        case Types.FIX_WORK:
            let fixWork = action.work;
            let indexWorkFix = findIndex(fixWork, state);
            state[indexWorkFix] = fixWork;
            return [...state];
        default: return [...state];
    }
}
export default myReducers;