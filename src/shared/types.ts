export interface IPost {
    id: number
    name: string
    content: string
    image: string
    likes: number

    tags: {
        tag: {
            id: number
            name: string
        }
    }[]
}


export interface ITag {
    id: number
    name: string
}