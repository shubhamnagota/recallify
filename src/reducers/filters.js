const filtersReducerDefaultState = {
  titleText: "",
  categoryName: "",
  sortBy: "date"
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TITLE_FILTER":
      return {
        ...state,
        titleText: action.titleText
      };
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        categoryName: action.categoryName
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        sortBy: "category"
      };
    default:
      return state;
  }
};
