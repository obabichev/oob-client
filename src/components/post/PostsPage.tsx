import React, {useEffect} from 'react';
import {useFetchPosts} from './hooks';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript.min.js'
import {Link} from 'react-router-dom';
import {Page} from '../Page';
import {CustomLink} from '../common/CustomLink';


export const PostsPage: React.FunctionComponent<{}> = (props) => {
    useEffect(() => {
        Prism.highlightAll();
    });

    const posts = useFetchPosts();

    return <Page>
        {posts.map(post => {
            return <div>
                <CustomLink to={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                </CustomLink>
            </div>
        })}
    </Page>
};