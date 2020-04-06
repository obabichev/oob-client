import {service} from './rest';
import {Post} from '../types';


export const fetchPosts = async () => {
    const response = await service.get<{ posts: Post[] }>('/post');
    return response.posts;
};

export const fetchPost = async (id: number) => {
    const response = await service.get<{ post: Post }>(`/post/${id}`);
    return response.post;
};

export const createPost = async (body: { title: string, description: string, content: string }) => {
    const response = await service.post<{ post: Post; }>('/post', body);
    return response.post;
};

export const fetchDraftPost = async () => {
    const response = await service.get<{ post: Post }>('/post', {status: 'draft'});
    return response.post;
};

export const fetchPostFiles = async (postId: number) => {
    const response = await service.get<{ files: any[] }>(`/post/${postId}/files`);
    return response.files;
};
