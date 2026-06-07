
export interface Blog {
    id: number;
    title: string;
    slug: string;
    category: string;

    excerpt: string;
    content: string;

    featuredImage: string;
    images: string[];

    author: {
        name: string;
        avatar: string;
        role: string;
    };

    tags: string[];

    likes: number;
    dislikes: number;

    rating: number;
    totalRatings: number;

    views: number;

    readingTime: number;

    publishedAt: string;

    reviews: Review[];
    comments: Comment[];
}


export type Review = {
    id: number;
    user: string;
    avatar: string;
    rating: number;
    review: string;
    date: string;
};

export type Comment = {
    id: number;
    user: string;
    avatar: string;
    comment: string;
    date: string;
};
