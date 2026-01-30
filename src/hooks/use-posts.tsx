import { useEffect, useState } from "react";
import { IPost } from "../shared";

export function usePosts() {
    const [posts, setPosts] = useState<IPost[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                setLoading(true)
                const response = await fetch("http://127.0.0.1:8000/posts/")
                const data = await response.json()

                if (response.status === 500) {
                    setError("Internal Server Error")
                } else if (response.status === 404) {
                    setError("Posts not found")
                } else if (response.status === 400) {
                    setError("Bad Request")
                } else {
                    setPosts(data)
                }
            } catch (error) {
                console.error(error)

				if (error instanceof Error) {
					setError(error.message)
				} else {
					setError("Unknown error. Please try again later.")
				}
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return { posts, setPosts, loading, error }
}