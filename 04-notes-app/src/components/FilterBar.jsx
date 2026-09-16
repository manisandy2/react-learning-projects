function FilterBar({ selectedCategory, onCategoryChange }) {
  const categories = [
    "All",
    "Work",
    "Personal",
    "Study",
  ];

  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;