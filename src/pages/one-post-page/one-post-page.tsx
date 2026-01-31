import { IMAGES, ICONS } from '../../shared';
import styles from './one-post-page.module.css';
import { IPostProps } from "../posts-page/posts-page.types"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePostById } from '../../hooks';
import { BeatLoader } from 'react-spinners';
import { CommentSection } from '../../components/CommentSection';
import { Post } from '../../components/Post';


export function OnePostPage() {
	const { id } = useParams()
	const navigate = useNavigate()

	const { post, error, loading } = usePostById(Number(id))

	useEffect(() => {
		if (Number.isNaN(Number(id))) {
			navigate("/")
		}
	}, [id, navigate])

    if (loading) {
        console.log('LOADING')
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
		return <h1>{error}</h1>
	}

	if (!post) return null


	return (
		<div className={styles.page}>
            <Post post={post} />
            <CommentSection post={post}/>
        </div>

	)
}
