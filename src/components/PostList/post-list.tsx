import { useEffect, useState } from "react";
import styles from './post-list.module.css'
import { Post } from "../Post/post";
import { IPost } from "../../shared";

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
        imageUrl:
            'https://file.hstatic.net/200000017614/file/y_nghia_hoa_sen_307656ddb26948c79485303fd7d33daa.jpg',
        tags: [tags[0], tags[1], tags[3]],
        likes: 4

    },
    {
        id: 2,
        title: "Post 2",
        description: "This is the second post",
        imageUrl:
            "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.1.0",
        tags: [tags[4]],
        likes: 10,

    }
]

export function PostList() {
    const [searchValue, setSearchValue] = useState<string>("")


    return (
        <div className={styles.postListContainer}>
            <div className={styles.filteredPosts}>
                <div className={styles.searchBarBlock}>
                    <input
                        type="text"
                        placeholder="Search posts..."
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
                        return <Post post={post} key={post.id}></Post>
                    })}
                </div>
            </div>
		</div>
    )
	
}
