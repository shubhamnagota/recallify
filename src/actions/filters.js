// SET_TITLE_FILTER
export const setTitleFilter = (titleText = "") => ({
  type: "SET_TITLE_FILTER",
  titleText
});

// SET_CATEGORY_FILTER
export const setCategoryFilter = (categoryName = "") => ({
  type: "SET_CATEGORY_FILTER",
  categoryName
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
// SORT_BY_CATEGORY
export const sortByCategory = () => ({
  type: "SORT_BY_CATEGORY"
});
