import { useState } from "react";
import styles from "../../styles/searchbar.module.css";
export default function SearchBar({ setData, data, value, handleSearchKey }) {
  const [filteredItem, setFilteredItem] = useState();
  const [copyData, setCopyData] = useState(data);
  const handleOnChange = (e) => {
    const value = e.target.value;

    setFilteredItem(value);
    value === "" && setData(copyData);
  };
  const clearSearch = () => {
    setFilteredItem("");
    setData(copyData);
  };
  const filteredData = () => {
    const arr = copyData;

    const newArr = arr.filter((item) =>
      item.title.toLowerCase().includes(filteredItem.toLowerCase().trim())
    );
    setData(newArr);
    console.log(newArr);

    // arr.map((e) => console.log(e.title));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.searchbar_wrap}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={styles.text}
          onChange={(e) => handleOnChange(e)}
          placeholder="Search by Category"
          value={filteredItem}
        />
        {filteredItem && <span onClick={() => clearSearch()}>x</span>}
        <button onClick={() => filteredData()}>Go</button>
      </form>
    </div>
  );
}
