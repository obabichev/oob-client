import React, {useEffect} from 'react';
import {useFetchPosts} from './hooks';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript.min.js'
import {Link} from 'react-router-dom';
import {Page} from '../Page';
import {A} from '../common/A';


export const PostsPage: React.FunctionComponent<{}> = (props) => {
    useEffect(() => {
        Prism.highlightAll();
    });

    const posts = useFetchPosts();

    console.log('[obabichev] pposts', posts);

    return <Page>
        {posts.map(post => {
            return <div>
                <A href={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                </A>
            </div>
        })}
    </Page>
};