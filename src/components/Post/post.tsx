import style from './post.module.css'
import { IPostProps } from "./types"
import UserAvatar from '../../assets/images/Avatar.png'
import { ReactComponent as LikeButton } from "../../assets/icons/likes.svg"
import { ReactComponent as ViewsButton } from "../../assets/icons/views.svg"

export function PostCard(props: IPostProps){
    const { post } = props

    return (
        <div className= {style.postContainer}>
            <div className={style.postAuthor}>
                <img src={UserAvatar} className={style.authorAvatar} alt="author-avatar"/>
                <p className={style.authorName}>User123</p>
            </div>

            <h1 className={style.postTitle}>{post.title}</h1>
            <h2 className={style.postDescription}>{post.description}</h2>
            {/* <div className={style.imageOverlay}>
                <p className={style.imageTitle}>{post.imageTitle}</p>
                <p className={style.imageDescription}>{post.imageDescription}</p>
            </div> */}

            <div className={style.imageContainer}>
                <img src={post.imageUrl1} className= {style.postImage} alt="post-image1"/>
                <img src={post.imageUrl2} className= {style.postImage} alt="post-image"/>
                <img src={post.imageUrl3} className= {style.postImage} alt="post-image"/>
            </div>
            
            <div className={style.postTags}>
                {post.tags.map(tag => (
                <span key={tag.id} className={style.Tags}>
                    #{tag.name} </span>
                ))}
            </div>

            <div className={style.postStatus}>
                <p><LikeButton width={18} height={16}/><span>12.3K</span></p>
                <p><ViewsButton width={20} height={14}/><span>143.3K</span></p>
            </div>
        </div>
    )
}

