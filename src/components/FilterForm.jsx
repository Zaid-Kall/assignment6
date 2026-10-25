function FilterForm({ filter, onFilterChange }) {
  return (
    <div style={{ margin: "16px 0" }}>
      <input
        type="text"
        placeholder="Filter posts by title"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
    </div>
  );
}

export default FilterForm;