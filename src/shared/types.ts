export interface IPost {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    tags: ITag[];
    likes: number;
}

export interface ITag {
    id: number;
    name: string;
}
