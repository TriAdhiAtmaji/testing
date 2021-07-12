import types from './types';

const registerReducer = (state = {
    loading: false,
    message: ''
}, action) => {
    switch (action.type) {
        case types.REQUEST_REGISTER:
            return { loading: true, message: '' };
        case types.SUCCESS_REGISTER:
            return { loading: false, message: '' };
        case types.ERROR_REGISTER:
            return { loading: false, message: action.message };
        default:
            return state;
    }
};

export default registerReducer;