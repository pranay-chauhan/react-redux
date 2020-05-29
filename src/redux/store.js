
import {createStore} from 'redux';
import reducer from './book/bookReducer';


const store = createStore(reducer)

export default store