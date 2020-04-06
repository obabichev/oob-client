export type Maybe<T> = null | T;

export interface User {
    username: string;
    firstName?: string;
    lastName?: string;
    email: string;
    permissions: Permission[];
}

export interface Permission {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    status: 'draft' | 'progress' | 'published' | 'deleted'
}