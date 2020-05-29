import {BUY_BOOK} from './bookType';
const initialState = {
    numOfBooks:10
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK : return {
            ...state,
            numOfBooks:numOfBooks-1
        }
        default : return state
    }
}


export default reducer