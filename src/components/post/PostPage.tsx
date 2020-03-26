import React, {useEffect} from 'react';
import {useFetchPost} from './hooks';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

export const PostPage: React.FunctionComponent<{}> = (props) => {
    // @ts-ignore
    const id = props.match.params.id;

    const post = useFetchPost(id);

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);

    if (!post) {
        return null;
    }

    return <div>
        <h1>{post.title}</h1>

        <ReactMarkdown source={post.content}/>
    </div>
};