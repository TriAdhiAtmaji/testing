import actions from './actions';
import api from '../../../utils/api';
import { AsyncStorage } from 'react-native';


const setToStorage = obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
        AsyncStorage.setItem(key, obj[key] != null ? obj[key].toString() : "")
    });
}

const login = (username, password) => (
    dispatch => {
        dispatch(actions.requestLogin());
        return api.postAuth('/user-management/login', username, password)
            .then(data => {
                setToStorage({ ...data.data, ...data.token, ...data.dataRole });
                dispatch(actions.successLogin());
                return true;
            })
            .catch(error => {
                dispatch(actions.errorLogin(error.message));
                return false;
            });
    }
);

export default {
    login
}