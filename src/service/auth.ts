import {service} from './rest';

export const fetchRegister = (credentials: { username: string, password: string, email: string, firstName: string, lastName: string }) => {
    return service.post('/register', credentials);
};

export const fetchLogin = (credentials: { email: string, password: string }) => {
    return service.post('/login', credentials);
};
