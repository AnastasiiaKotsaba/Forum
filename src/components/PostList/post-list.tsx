import { useEffect, useState } from "react";
import styles from './post-list.module.css'
import { Post } from "../Post/post";
import { IPost } from "../../shared";
import { IPostListProps } from "./post-list.types";
import { usePosts } from "../../hooks";
import { BeatLoader } from "react-spinners";

 

export function PostList({ search, likesMinimumValue, selectedTags }: IPostListProps) {
    const { posts, loading, error } = usePosts()
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

    console.log(filteredPosts)

    useEffect(() => {
        if (!posts || posts.length === 0) {
            setFilteredPosts([])
            return
        }

        let newPosts = [...posts]

        newPosts = newPosts.filter((post) =>
            post.name.toLowerCase().includes(search.toLowerCase())
        )

        // 🏷 теги
        if (selectedTags !== 'All') {
            newPosts = newPosts.filter(post =>
                selectedTags.every(tagId =>
                    post.tags.map(tag => tag.tag.id).includes(tagId)
                )
            )
        }

        // ❤️ лайки
        if (likesMinimumValue === -1) {
            newPosts = newPosts.filter(post => post.likes === 0)
        } else {
            newPosts = newPosts.filter(post => post.likes >= likesMinimumValue)
        }

        setFilteredPosts(newPosts)

    }, [posts, search, selectedTags, likesMinimumValue])


    if (loading) {
        return (
            <div className={styles.loaderOverlay}>
                <div className={styles.loaderWrapper}>
                    <BeatLoader size={12} />
                    <p className={styles.loaderText}>
                        We're loading the page. Please, wait...
                    </p>
                </div>
            </div>

        )
    }

    if (error) {
        return <p className={styles.errorText}>Error: {error}</p>
    }

    return (
        <div className={styles.postListContainer}>
            {
                loading ? (
                    <p className={styles.loadingText}>Loading...</p>
                ) : error ? (
                    <p className={styles.errorText}>Error: {error}</p>
                ) : (
                    <div className={styles.postsBlock}>
                        {/* умова ? вираз якщо true : вираз якщо false */}
                        {filteredPosts.length === 0 ? (
                            <div className={styles.emptyState}>
                                Такого посту не було знайдено...Спробуйте ще раз
                            </div>
                        ) : (
                            <div className={styles.posts}>
                                {filteredPosts.map((post) => (
                                    <Post post={post} key={post.id} />
                                ))}
                            </div>
                        )}
                    </div>
                )
            }
		</div>
    )
	
}
