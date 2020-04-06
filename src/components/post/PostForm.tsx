import React, {ChangeEventHandler, useEffect, useState} from 'react';
import Prism from 'prismjs';
import {PostComponent} from './PostComponent';
import {createPost} from '../../service/post';
import {useHistory} from 'react-router';
import {downloadFile, fetchFilesList, uploadFile} from '../../service/files';
import {Post} from '../../types';
import {PostFiles} from './PostFiles';

export const PostForm: React.FunctionComponent<{ post: Post }> = ({post}) => {
    const history = useHistory();
    const [form, setForm] = useState({
        content: '',
        title: '',
        description: ''
    });
    const [files, setFiles] = useState<any[]>([]);

    const onChange: ChangeEventHandler<{ value: string, name: string; }> = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [form.content]);

    const onCreatePost = () => {
        createPost(form)
            .then(post => {
                console.log('[obabichev] post', post);
                history.push('/');
            })
            .catch(error => {
                console.error(error.message);
            })
    };

    return <div style={{textAlign: 'center'}}>
        <div style={{textAlign: 'left'}}>
            <label htmlFor="title">Title</label>
            <input onChange={onChange} value={form.title} name="title"/>
        </div>
        <div style={{textAlign: 'left'}}>
            <label htmlFor="title">Description</label>
            <input onChange={onChange} value={form.description} name="description"/>
        </div>
        <div style={{maxWidth: '48rem'}}>
                <textarea style={{width: '100%', resize: 'none', outline: 'none', height: '300px'}}
                          value={form.content}
                          onChange={onChange}
                          name="content"/>
        </div>
        <button onClick={onCreatePost}>Create</button>

        <PostFiles postId={post.id}/>

        <PostComponent post={form}/>
    </div>;
};























