import styles from "./search.module.css";
import { useRef, useState } from "react";
import { usePosts } from "../../hooks";
import { Modal } from "../../shared/modal/modal";


export function Search() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const { posts } = usePosts()

    function handleInputFocus() {
		setIsModalOpen(!isModalOpen)
	}

    const modalContainerRef = useRef<HTMLDivElement>(null);
    return (
        <div className={styles.searchContainer} ref={modalContainerRef}>
            <input
                type="text"
                placeholder="Search posts..."
                onFocus={handleInputFocus}
                className={styles.searchInput}
                onClick={(event) => {
                    event.stopPropagation()
                }}
            />

            <Modal
                className={styles.postModal}
                isOpen={isModalOpen}
                onClose={closeModal}
                doCloseOnOutsideClick={true}

                container= {
                    // Якщо modalContainerRef.current не є null, повернути його, інакше повернути undefined
                    modalContainerRef.current ? modalContainerRef.current : undefined
                }
            >
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id} className={styles.postItem}>
                                <h3 className={styles.postTitle}>{post.name}</h3>
                                <img
                                    src={post.image}
                                    alt={post.name}
                                    className={styles.postImage}
                                />
                                <p className={styles.postContent}>{post.content}</p>
                            </div>
                        )
                    })
                }
                
            </Modal>
        </div>
    );
}