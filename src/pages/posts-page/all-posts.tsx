import { useState } from "react";
import { PostList } from "../../components/PostList";
import { SelectTags } from "../../components/selectTags";
import { SelectLikes } from "../../components/selectLikes";
import styles from './all-posts.module.css'
import { ICONS } from "../../shared";

export function PostPage() {

	const [selectedTags, setSelectedTags] = useState<'All' | number[]>('All');
	const [likesMinimumValue, setLikesMinimumValue] = useState<number>(0);
	const [search, setSearchValue] = useState<string>("")

	function setTags(tags: 'All' | number[]) {
		setSelectedTags(tags);
	}

	return (
		<div className={styles.filteredPosts}>
            <div className={styles.searchBarDiv}>
                <input
                    type="text"
                    placeholder="Find ideas, stories and people you like..."
                    className={styles.searchBarInput}
                    onChange={(event) => {
                        const inputValue = event.target.value
                        setSearchValue(inputValue)
                    }}
                />  
                <button><ICONS.SearchImage width={21} height={21}/></button>
                <button><ICONS.FilterImage width={20} height={22}/></button>
            </div>

			<div className={styles.filterPost}>

				<h3 className={styles.filtrationTitle}>Filter your posts</h3>

				<SelectTags
					selectedTags={selectedTags}
					setSelectedTags={setTags}
				/>

				<SelectLikes
					likesMinimumValue={likesMinimumValue}
					setLikesMinimumValue={setLikesMinimumValue}
				/>
			</div>

			<div className={styles.sectionLine}></div>


			<div className={styles.postListContainer}>
				<PostList
					selectedTags={selectedTags}
					likesMinimumValue={likesMinimumValue}
					search={search}
					/>
			</div>
		</div>
	);
}
