export default (words, { titleText, categoryName, sortBy }) => {
  return words
    .filter(word => {
      const titleTextMatch = word.title
        .toLowerCase()
        .includes(titleText.toLowerCase());
      const categoryNameMatch = word.category
        .toLowerCase()
        .includes(categoryName.toLowerCase());

      return titleTextMatch && categoryNameMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      return 0;
    });
};
