export interface Post {
    id: number;
    title: string;
    description: string;

    imageUrl1?: string;
    imageUrl2?: string;
    imageUrl3?: string;

    imageTitle: string;
    imageDescription: string;

    tags: Tag[];
    likes?: number;
}

export interface Tag {
    id: number;
    name: string;
    postId: number;
}

export interface IPostProps {
    post: Post
}
