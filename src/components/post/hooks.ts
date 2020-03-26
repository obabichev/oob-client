import {useEffect, useState} from 'react';
import {Post} from '../../types';
import {fetchPost, fetchPosts} from '../../service/post';

export const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts()
            .then(posts => setPosts(posts))
            .catch(error => console.error(error.message))
    }, []);

    return posts;
};

export const useFetchPost = (id: number) => {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        fetchPost(id)
            .then(post => setPost(post))
            .catch(error => console.error(error.message))
    }, []);

    return post;
};
