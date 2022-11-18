import styles from "../../styles/searchbar.module.css";
export default function SearchBar({
  value,
  handleSearchKey,
  formSubmit,
  clearSearch,
}) {
  return (
    <div className={styles.searchbar_wrap}>
      <form onSubmit={formSubmit}>
        <input
          type={styles.text}
          onChange={handleSearchKey}
          placeholder="Search by Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>x</span>}
        <button>Go</button>
      </form>
    </div>
  );
}
