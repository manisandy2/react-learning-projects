function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search notes..."
      value={searchTerm}
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchBar;