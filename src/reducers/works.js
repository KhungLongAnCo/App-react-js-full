
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
let SaveLocal = (state,works)=>{
    localStorage.setItem('works', JSON.stringify(state));
    localStorage.setItem('worksCompleted', JSON.stringify(works));
}

let myReducers = (state = initialState, action) => {
    let index = -1;
    let worksComplete = JSON.parse(localStorage.getItem('worksCompleted')) ?
        JSON.parse(localStorage.getItem('worksCompleted')) : [];
    switch (action.type) {
        case Types.CREATE_NEW_WORK:
            let newWork = {
                id: shortid.generate(),
                name: action.work.name,
                note: action.work.note,
                status: action.work.status
            }
            if (action.work.status === false) {
                state.push(newWork);
            } else {
                worksComplete.push(newWork);
            }
            SaveLocal(state,worksComplete);
            return [...state];
        case Types.FIX_WORK:
            let fixWork = action.work;
            index = findIndex(fixWork, state);
            if(fixWork.status === true){
                state.splice(index, 1);
                worksComplete.push(fixWork);
            }else{
                state[index] = fixWork;
            }
            SaveLocal(state,worksComplete);
            return [...state];
        case Types.DELETE_WORK:
            index = findIndex({ id: action.id }, state);
            if (index !== -1) {
                state.splice(index, 1);
            }
            SaveLocal(state,worksComplete);
            return [...state];
        case Types.COMPLETE_WORK:
            index = findIndex(action.work, state);
            state.splice(index, 1);
            worksComplete.push(action.work);
            SaveLocal(state,worksComplete);
            return [...state];
        default: return [...state];
    }
}

export default myReducers;