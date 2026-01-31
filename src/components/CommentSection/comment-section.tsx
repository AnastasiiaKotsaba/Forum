import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../shared";
import styles from "./comment-section.module.css";
import { IPostProps } from './comment-section.types'

export function CommentSection(props: IPostProps) {
	const { post } = props

	console.log('Post component rendered with post:', post.tags);
	return (
		<div className={styles.commentsContainer}>
			<h3 className={styles.commentsTitle}>Comments</h3>

			<div className={styles.commentsList}>
				<div className={styles.comment}>
					<div className={styles.commentAvatar}></div>
					<div>
						<p className={styles.commentAuthor}>User123</p>
						<p className={styles.commentText}>So beautiful</p>
					</div>
				</div>
			</div>

			<div className={styles.commentInputWrapper}>
				<input
					className={styles.commentInput}
					placeholder="Add a comment..."
				/>
				<button className={styles.commentButton}>Send</button>
			</div>
		</div>

	)
}
