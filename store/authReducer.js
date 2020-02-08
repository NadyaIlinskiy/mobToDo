import { getAllTasks } from './taskReducer';
import { api } from '../util';
import { Buffer } from 'buffer';

const initialState = {
    email: '',
    token: '',
    password: '',
};

const attemptLogin = (email, password) => {
    return async dispatch => {
        if (email.trim() === '' || password.trim() === '') {
            dispatch({ type: 'LOGIN_FAIL', data: 'Missing Form Fields' });
            return;
        }

        dispatch({ type: 'ATTEMPT_LOGIN', data: email });

        let req = api + '/signin';

        let auth =
            'Basic ' + Buffer.from(email + ':' + password).toString('base64');

        let response = await fetch(req, {
            method: 'POST',
            headers: {
                Authorization: auth,
            },
        });

        if (response.status === 200) {
            let json = await response.json();
            dispatch({ type: 'LOGIN_SUCCESS', data: json });
            dispatch(getAllTasks());
        } else dispatch({ type: 'LOGIN_FAIL', data: response });
    };
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'ATTEMPT_LOGIN':
            newState.email = action.data;
            break;

        case 'LOGIN_SUCCESS':
            newState.token = action.data.token;
            break;

        case 'LOGIN_FAIL':
            console.error('Login Failed with response: ', action.data);
            newState.token = '';
            newState.email = '';
            break;

        case 'LOGOUT':
            newState.email = '';
            newState.token = '';
            break;

        default:
            break;
    }

    return newState;
};

export { attemptLogin };
export default reducer;
