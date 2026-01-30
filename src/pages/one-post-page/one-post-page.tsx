import { IMAGES, ICONS } from '../../shared';
import styles from './one-post-page.module.css';
import { IPostProps } from "../posts-page/posts-page.types"

export function OnePostPage(props: IPostProps) {
    const { post } = props

    return(
        <div className= {styles.postContainer}>
            <div className={styles.postAuthor}>
                <img src={IMAGES.UserAvatar} className={styles.authorAvatar} alt="author-avatar"/>
                <p className={styles.authorName}>User123</p>
            </div>

            <h1 className={styles.postTitle}>{post.name}</h1>
            <h2 className={styles.postDescription}>{post.content}</h2>


            <div className={styles.imageContainer}>
                <img src={post.image} className= {styles.postImage} alt="post-image1"/>
            </div>
            
            <div className={styles.postStatus}>
                <p><ICONS.LikeButton width={18} height={16}/><span>12.3K</span></p>
                <p><ICONS.ViewsButton width={20} height={14}/><span>143.3K</span></p>
            </div>
        </div>
    )
}