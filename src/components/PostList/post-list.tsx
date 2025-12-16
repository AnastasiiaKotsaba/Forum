import { use, useEffect, useState } from "react";
import { PostCard } from "../Post/post";
import styles from "../Post/post.module.css";
import { IPostProps, Post, Tag } from "../Post/types";

const tags = [
    { id: 1, name: "Tigers" }, 
    { id: 2, name: "Lotus" }, 
    { id: 3, name: "Trip" },
    { id: 4, name: "Nature" }, 
    { id: 5, name: "Evening" }
]

const posts = [
	{
		id: 1,
		title: "Post 1",
        description: "This is the first post",
        imageUrl1:
            'https://file.hstatic.net/200000017614/file/y_nghia_hoa_sen_307656ddb26948c79485303fd7d33daa.jpg',
        imageUrl2:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tigre.jpg/1200px-Tigre.jpg",
        imageUrl3:
            "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww",
        imageTitle: "Cute Cat",
        imageDescription: "A very cute cat sitting on the floor",

        tags: [tags[0], tags[1], tags[3]],

	},
    {
		id: 2,
		title: "Post 2",
        description: "This is the second post",
        imageUrl1:
            "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.1.0",
        imageUrl2:
            "https://images.pexels.com/photos/289378/pexels-photo-289378.jpeg?cs=srgb&dl=pexels-pixabay-289378.jpg&fm=jpg",
        imageUrl3:
            "https://images.pexels.com/photos/57705/lake-evening-sunset-abendstimmung-57705.jpeg",
        imageTitle: "Cute Cat",
        imageDescription: "A very cute cat sitting on the floor",

        tags: [tags[4]],

	},
]


export function PostList(props: IPostProps) {
    const [searchValue, setSearchValue] = useState<string>('')

    const [selectedTags, setSelectedTags] = useState<number[]>([])

    const [likesMinimumValue, setlikesMinimumValue] = useState<number>(0) 

    const [filteredTags, setFilteredTags] = useState(tags) 
    const [filteredPosts, setFilteredPosts] = useState(posts) 

    useEffect(() => {
        
    })


	return (
		<div className={styles.postListContainer}>
            <div className={styles.filteredPosts}>
                <div className={styles.searchBarBlock}>
                    <input
                        type="text"
                        placeholder="Search posts by their title..."
                        className={styles.searchBarInput}
                        onChange={(event) => {
                            const inputValue = event.target.value
                            setSearchValue(inputValue)
                        }}
                    />  
                </div>
            </div>

            <div className={styles.postsBlock}>
                <div className={styles.posts}>
                    {posts.map((post) => {
                        return <PostCard post={post} key={post.id}></PostCard>
                    })}
                </div>
            </div>
		</div>
	)
}

