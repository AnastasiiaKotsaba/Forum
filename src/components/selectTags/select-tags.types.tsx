export interface ISelectTags {
    setSelectedTags: (tags: 'All' | number[]) => void;
    selectedTags: 'All' | number[];
}
