import api from '../../../utils/api';
import actions from './actions';

const register = (data) => (
    dispatch => {
        dispatch(actions.requestRegister());
        return api.post('/user-management/register', data)
            .then(res => {
                dispatch(actions.successRegister());
                return res.status;
            })
            .catch(error => {
                dispatch(actions.errorRegister(error.message));
                return false;
            });
    }
);

export default {
    register
}