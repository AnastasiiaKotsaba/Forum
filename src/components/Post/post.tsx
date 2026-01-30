import { ICONS, IMAGES } from "../../shared";
import styles from "./post.module.css";
import { IPostProps } from './post.types'

export function Post(props: IPostProps) {
	const { post } = props

	console.log('Post component rendered with post:', post.tags);
	return (
		<div className={styles.postContainer}>
			<div className={styles.postAuthor}>
				<img
					src={IMAGES.UserAvatar}
					className={styles.authorAvatar}
					alt="author-avatar"
				/>
				<p className={styles.authorName}>User123</p>
			</div>

			<h3 className={styles.postTitle}>{post.name}</h3>

			<p className={styles.postDescription}>
				{post.content}
			</p>

			<p className={styles.postTags}>
				{post.tags && post.tags.map((item) => (
					<span
						className={styles.postTag}
						key={item.tag.id}
					>
						#{item.tag.name}
					</span>
				))}
			</p>

			<div className={styles.imageContainer}>
				<img
					src={post.image}
					className={styles.postImage}
					alt="post-image"
				/>
			</div>

			<div className={styles.postStatus}>
				<p>
					<ICONS.LikeButton width={18} height={16} />
					<span>{post.likes}</span>
				</p>
				<p>
					<ICONS.ViewsButton width={20} height={14} />
					<span>143.3K</span>
				</p>
			</div>
		</div>
	);
}
