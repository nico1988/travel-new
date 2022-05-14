// import { BASE_URL, TOKEN_KEY } from './constants';
const BASE_URL = "http://localhost:3000";
const TOKEN_KEY = "token";

exports.fetchPost = async (url, data = {}) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const res = await fetch(BASE_URL + url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    return await res.json();
};

exports.fetchPostWithNoToken = async (url, data = {}) => {
    const res = await fetch(BASE_URL + url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
};

exports.fetchGet = async (url) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const res = await fetch(BASE_URL + url, {
        method: 'GET',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    return await res.json();
};