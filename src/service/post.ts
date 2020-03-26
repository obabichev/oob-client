import {service} from './rest';
import {Post} from '../types';


export const fetchPosts = async () => {
    const response = await service.get<{ posts: Post[] }>('/post');
    console.log('[obabichev] response', response);
    return response.posts;
};

export const fetchPost = async (id: number) => {
    const response = await service.get<{ post: Post }>(`/post/${id}`);
    console.log('[obabichev] response', response);
    return response.post;
};
