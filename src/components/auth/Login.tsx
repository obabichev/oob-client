import React, {ChangeEventHandler, useState} from 'react';
import {Page} from '../Page';
import {fetchLogin} from '../../service/auth';

export const Login: React.FunctionComponent<{}> = () => {
    const [form, setForm] = useState({
        password: '',
        email: '',
    });

    const onChange: ChangeEventHandler<{ value: string, name: string; }> = (event) => {
        const {value, name} = event.target;
        setForm({...form, [name]: value})
    };

    const onClick = () => {
        fetchLogin(form)
            .then(result => {
                console.log('[obabichev] resut', result);
            })
            .catch(error => {
                console.log('[obabichev] error', error);
            })
    };

    return <Page>
        <div>
            <label htmlFor="email-input">Email</label>
            <input value={form.email} onChange={onChange} id="email-input" type="text" name="email"/>
        </div>
        <div>
            <label htmlFor="password-input">Password</label>
            <input value={form.password} onChange={onChange} id="password-input" type="password" name="password"/>
        </div>

        <button onClick={onClick}>Login</button>
    </Page>
};