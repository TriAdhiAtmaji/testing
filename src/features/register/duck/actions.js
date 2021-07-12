import types from './types';

const requestRegister = () => ({
    type: types.REQUEST_REGISTER
});

const successRegister = () => ({
    type: types.SUCCESS_REGISTER
});

const errorRegister = message => ({
    type: types.ERROR_REGISTER,
    message
});

export default {
    requestRegister,
    successRegister,
    errorRegister
}