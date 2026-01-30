import { useEffect, useState } from "react";
import { ITag } from "../shared";

export function useTags() {
    const [tags, setTags] = useState<ITag[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTags = async () => {
            setLoading(true)
            try {
                setLoading(true)
                const response = await fetch("http://127.0.0.1:8000/tags/")
                const data = await response.json()

                if (response.status === 500) {
                    setError("Internal Server Error")
                } else if (response.status === 404) {
                    setError("Tags not found")
                } else if (response.status === 400) {
                    setError("Bad Request")
                } else {
                    setTags(data)
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

        fetchTags()
    }, [])

    return { tags, setTags, loading, error }
}