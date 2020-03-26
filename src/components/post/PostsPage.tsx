import React, {useEffect} from 'react';
import {useFetchPosts} from './hooks';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript.min.js'
import {Link} from 'react-router-dom';


export const PostsPage: React.FunctionComponent<{}> = (props) => {
    useEffect(() => {
        Prism.highlightAll();
    });

    const posts = useFetchPosts();

    console.log('[obabichev] pposts', posts);

    return <div>
        {posts.map(post => {
            return <div><Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
            </Link></div>
        })}
    </div>
};