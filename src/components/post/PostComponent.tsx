import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

import classes from './PostComponent.module.css';

export const PostComponent: React.FunctionComponent<{ post: { title: string, content: string }; }> = ({post}) => {

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);

    return <div className={classes.postComponent}>
        <h1>{post.title}</h1>

        <ReactMarkdown source={post.content}/>
    </div>;
};
