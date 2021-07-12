import types from './types';

const loginReducer = (state = {
    loading: false,
    message: ''
}, action) => {
    switch (action.type) {
        case types.REQUEST_LOGIN:
            return { loading: true, message: '' };
        case types.SUCCESS_LOGIN:
            return { loading: false, message: '' };
        case types.ERROR_LOGIN:
            return { loading: false, message: action.message };
        default:
            return state;
    }
};

export default loginReducer;