import React, {ChangeEventHandler, useEffect, useState} from 'react';
import Prism from 'prismjs';
import {PostComponent} from './PostComponent';

export const PostForm: React.FunctionComponent<{}> = () => {
    const [form, setForm] = useState({
        content: '',
        title: '',
        description: ''
    });

    const onChange: ChangeEventHandler<{ value: string, name: string; }> = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [form.content]);

    return <div>
        <div>
            <label htmlFor="title">Title</label>
            <input onChange={onChange} value={form.title} name="title"/>
        </div>
        <div>
            <label htmlFor="title">Description</label>
            <input onChange={onChange} value={form.description} name="description"/>
        </div>
        <div style={{maxWidth: '48rem'}}>
                <textarea style={{width: '95%', resize: 'none', outline: 'none', height: '300px'}}
                          value={form.content}
                          onChange={onChange}
                          name="content"/>
        </div>

        <PostComponent post={form}/>
    </div>;
};























