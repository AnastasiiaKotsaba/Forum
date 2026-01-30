import { ISelectTags } from "./select-tags.types";
import styles from "./select-tags.module.css";
import { useTags } from "../../hooks/use-tags";

export function SelectTags(props: ISelectTags) {
    const { setSelectedTags, selectedTags } = props;

    const { tags } = useTags()

    console.log('Tags:', tags)

    return (
        <div className={styles.selectTags}>
            <p>Select tags...</p>

            <div className={styles.allTags}>
                <label className={styles.tagLabel} htmlFor="tag">
                    <input
                        type="checkbox"

                        onChange={() => {
                            setSelectedTags('All');
                        }}

                        id={"all-tags"}
                        value={"All"}
                        checked={selectedTags === 'All' } />
                    All
                </label>

                {tags.map((tag) => {
                    return (
                        <label className={styles.tagLabel} key={tag.id} htmlFor='tag'>
                            <input
                                type="checkbox"
                                value={tag.id}
                                onChange={() => {
                                    // Пкревіряємо чи selectedTags масив (number[])
                                    if (Array.isArray(selectedTags)) {
                                        if (selectedTags.includes(tag.id)) {
                                            // Видаляємо тег
                                            setSelectedTags(selectedTags.filter(id => id !== tag.id));
                                        } else {
                                            // Додаємо тег
                                            setSelectedTags([...selectedTags, tag.id]);
                                        }
                                    } else {
                                        // Якщо зараз "All", замінюємо на масмв з одного тегу
                                        setSelectedTags([tag.id]);
                                    }
                                }}

                                checked={selectedTags !== 'All' && selectedTags.includes(tag.id)}
                                key={tag.id}
                            />
                            {tag.name}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}