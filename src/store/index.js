import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../features/login/duck';

export default initial => (
    applyMiddleware(thunk)(createStore)(
        combineReducers({
            form: formReducer,
            login: loginReducer,
        }), initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
