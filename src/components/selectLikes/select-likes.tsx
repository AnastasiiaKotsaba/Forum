import { ISelectLikes } from "./select-likes.types";
import styles from "./select-likes.module.css";

export function SelectLikes(props: ISelectLikes) {
    const { likesMinimumValue, setLikesMinimumValue } = props;

    return (
        <div className={styles.likesFilter}>
            <p className={styles.title}>Filter by likes</p>

            <div className={styles.options}>
                <label
                    className={`${styles.option} ${
                        likesMinimumValue === -1 ? styles.active : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="likes"
                        checked={likesMinimumValue === -1}
                        onChange={() => setLikesMinimumValue(-1)}
                    />
                    Less than 0
                </label>

                <label
                    className={`${styles.option} ${
                        likesMinimumValue === 0 ? styles.active : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="likes"
                        checked={likesMinimumValue === 0}
                        onChange={() => setLikesMinimumValue(0)}
                    />
                    More than 0
                </label>

                <label
                    className={`${styles.option} ${
                        likesMinimumValue === 50 ? styles.active : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="likes"
                        checked={likesMinimumValue === 50}
                        onChange={() => setLikesMinimumValue(50)}
                    />
                    More than 50
                </label>

                <label
                    className={`${styles.option} ${
                        likesMinimumValue === 100 ? styles.active : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="likes"
                        checked={likesMinimumValue === 100}
                        onChange={() => setLikesMinimumValue(100)}
                    />
                    More than 100
                </label>
            </div>
        </div>
    );
}