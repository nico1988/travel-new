// import { TOKEN_KEY, USER_ID_KEY, USER_NAME_KEY, EMAIL_KEY } from './constants'
const TOKEN_KEY = "token";
const USER_NAME_KEY = "username";
const EMAIL_KEY = "email";
const USER_ID_KEY = "userid";

exports.setSessionInfo = (data) => {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_ID_KEY, data.userid);
    localStorage.setItem(USER_NAME_KEY, data.username);
    localStorage.setItem(EMAIL_KEY, data.email);
};

exports.clear = () => {
    localStorage.clear();
};