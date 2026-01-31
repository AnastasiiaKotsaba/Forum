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

        if (selectedTags === 'All') {
            const searchedPosts = posts.filter((post) => {
                return post.name
                    .toLowerCase()
                    .startsWith(search.toLowerCase())
            })

            setFilteredPosts(searchedPosts)
        } else {
            const newPosts = posts.filter((post) => {
                return selectedTags.every((tagId) => {
                    return post.tags
                        .map((tag) => 
                            tag.tag.id
                        )
                        .includes(tagId)
                })
            })

            const searchedPosts = newPosts.filter((post) => {
                return post.name
                    .toLowerCase()
                    .startsWith(search.toLowerCase())
            })

            setFilteredPosts(searchedPosts)
        }

        if (likesMinimumValue === -1) {
            const filteredPostZeroLikes = posts.filter((post) => {
                return post.likes === 0
            })
            setFilteredPosts(filteredPostZeroLikes)
        } else {
            const filteredPostMoreLikes = posts.filter((post) => {
                return post.likes >= likesMinimumValue
            })
            setFilteredPosts(filteredPostMoreLikes)
        }

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
