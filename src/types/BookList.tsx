export type BookListing = {
    id: number;
    postedBy: {
        name: string;
        avatar: string;
        badge: string;
    };
    postedAt: string;
    title: string;
    description: string;
    image: string;
    sellerLocation: string;
    price: number;
    availableDuration: string;
    condition: string;
};