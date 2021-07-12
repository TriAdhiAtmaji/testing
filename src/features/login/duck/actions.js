import types from './types';

const requestLogin = () => ({
    type: types.REQUEST_LOGIN
});

const successLogin = () => ({
    type: types.SUCCESS_LOGIN
});

const errorLogin = message => ({
    type: types.ERROR_LOGIN,
    message
});

export default {
    requestLogin,
    successLogin,
    errorLogin
}