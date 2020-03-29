import {service} from './rest';
import {User} from '../types';

export const fetchRegister = async (credentials: { username: string, password: string, email: string, firstName: string, lastName: string }) => {
    const {user} = await service.post<{ user: User }>('/register', credentials);
    console.log('[obabichev] user', user);
    return user;
};

export const fetchLogin = async (credentials: { email: string, password: string }) => {
    const {user} = await service.post<{ user: User }>('/login', credentials);
    return user;
};
