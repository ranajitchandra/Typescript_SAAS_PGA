export type Comment = {
    id: number;
    user: string;
    message: string;
    date: string;
};

export type Blog = {
    id: number;
    title: string;
    description: string;
    images: string[];
    author: string;
    date: string;
    likes: number;
    dislikes: number;
    rating: number;
    comments: Comment[];
};