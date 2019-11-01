import axios from 'axios';
import { API_URL } from '../constants';

const getCompleteUrl = requestUrl => API_URL + requestUrl;

const getHeaders = () => ({
    Authorization: `Token ${localStorage.getItem('token')}`,
});

const getNoCacheHeaders = () => ({
    Authorization: `Token ${localStorage.getItem('token')}`,
    'Cache-Control': 'no-cache',
});

export const apiPatch = (requestUrl, postData) => axios({
    method: 'patch',
    url: getCompleteUrl(requestUrl),
    headers: getHeaders(),
    data: postData,
});

export const apiPut = (requestUrl, postData) => axios({
    method: 'put',
    url: getCompleteUrl(requestUrl),
    headers: getHeaders(),
    data: postData,
});

export const apiPost = (requestUrl, postData, config = {}) => axios({
    method: 'post',
    url: getCompleteUrl(requestUrl),
    headers: getHeaders(),
    data: postData,
    ...config,
});

export const apiDelete = (requestUrl, id, params = {}) => {
    const completeUrl = `${getCompleteUrl(requestUrl)}${id}/`;
    return axios.delete(completeUrl, { headers: getHeaders(), params: { ...params } });
};

export const apiGet = (requestUrl, params = {}) => {
    let queryString = '';
    if (params) {
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== null) {
                queryString += `${key}=${params[key]}&`;
            }
        });
    }
    const completeUrl = `${getCompleteUrl(requestUrl)}?${queryString}_=${Date.now()}`;
    return axios.get(completeUrl, { headers: getNoCacheHeaders() });
};

export const apiGetCached = (requestUrl, params) => {
    let queryString = '';
    Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
            queryString += `${key}=${params[key]}&`;
        }
    });
    if (queryString.endsWith('&')) {
        queryString = queryString.slice(0, -1);
    }
    const completeUrl = `${getCompleteUrl(requestUrl)}?${queryString}`;
    return axios.get(completeUrl, { headers: getNoCacheHeaders() });
};