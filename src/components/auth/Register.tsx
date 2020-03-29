import React, {ChangeEventHandler, useState} from 'react';
import {Page} from '../Page';
import {fetchRegister} from '../../service/auth';

export const Register: React.FunctionComponent<{}> = () => {

    const [form, setForm] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    });

    const onChange: ChangeEventHandler<{ value: string, name: string; }> = (event) => {
        const {value, name} = event.target;
        setForm({...form, [name]: value})
    };

    const onClick = () => {
        fetchRegister(form)
            .then(result => {
                console.log('[obabichev] resut', result);
            })
            .catch(error => {
                console.log('[obabichev] error', error);
            })
    };

    return <Page>
        <div>
            <label htmlFor="username-input">Username</label>
            <input value={form.username} onChange={onChange} id="username-input" type="text" name="username"/>
        </div>
        <div>
            <label htmlFor="email-input">Email</label>
            <input value={form.email} onChange={onChange} id="email-input" type="text" name="email"/>
        </div>
        <div>
            <label htmlFor="firstname-input">First name</label>
            <input value={form.firstName} onChange={onChange} id="firstname-input" type="text" name="firstName"/>
        </div>
        <div>
            <label htmlFor="lastname-input">Last name</label>
            <input value={form.lastName} onChange={onChange} id="lastname-input" type="text" name="lastName"/>
        </div>
        <div>
            <label htmlFor="password-input">Password</label>
            <input value={form.password} onChange={onChange} id="password-input" type="password" name="password"/>
        </div>

        <button onClick={onClick}>Create account</button>
    </Page>
};
