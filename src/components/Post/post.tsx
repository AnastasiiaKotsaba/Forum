import styles from './post.module.css'
import { IPostProps } from "./types"
import UserAvatar from '../../assets/images/Avatar.png'
import { ReactComponent as LikeButton } from "../../assets/icons/likes.svg"
import { ReactComponent as ViewsButton } from "../../assets/icons/views.svg"

export function PostCard(props: IPostProps){
    const { post } = props

    return (
        <div className= {styles.postContainer}>
            <div className={styles.postAuthor}>
                <img src={UserAvatar} className={styles.authorAvatar} alt="author-avatar"/>
                <p className={styles.authorName}>User123</p>
            </div>

            <h1 className={styles.postTitle}>{post.title}</h1>
            <h2 className={styles.postDescription}>{post.description}</h2>
            {/* <div className={styles.imageOverlay}>
                <p className={styles.imageTitle}>{post.imageTitle}</p>
                <p className={styles.imageDescription}>{post.imageDescription}</p>
            </div> */}

            <div className={styles.imageContainer}>
                <img src={post.imageUrl1} className= {styles.postImage} alt="post-image1"/>
                <img src={post.imageUrl2} className= {styles.postImage} alt="post-image"/>
                <img src={post.imageUrl3} className= {styles.postImage} alt="post-image"/>
            </div>
            
            <div className={styles.postTags}>
                {post.tags.map(tag => (
                <span key={tag.id} className={styles.Tags}>
                    #{tag.name} </span>
                ))}
            </div>

            <div className={styles.postStatus}>
                <p><LikeButton width={18} height={16}/><span>12.3K</span></p>
                <p><ViewsButton width={20} height={14}/><span>143.3K</span></p>
            </div>
        </div>
    )
}

