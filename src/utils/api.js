import axios from 'axios';

//untuk acset
// const getBaseUrl = (url, port = '8080') => `http://localhost:${port}/api${url}`;

const getBaseUrl = (url, port = '8080') => `https://nodejsapp0001.herokuapp.com/api${url}`;

const get = (url) =>
    axios.get(getBaseUrl(url), {
        timeout: 10000,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });

const post = (url, data, port) => {
    return axios.post(getBaseUrl(url, port), data, {
        timeout: 600000,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });
};

const postAuth = (url, username, password) =>
    axios.post(getBaseUrl(url), {}, {
        auth: { username, password }
    });

const setupInterceptors = () => {
    axios.interceptors.request.use(config => {
        return config;
    });

    axios.interceptors.response.use(
        response => {
            const { data } = response;
            return data;
        },
        error => {
            return Promise.reject(error.toString())
        }
    );
};

export default { get, post, setupInterceptors, postAuth };