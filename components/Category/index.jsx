import { useState } from "react";
import styles from "../../styles/category.module.css";

export default function Dropdown({ data, setData }) {
  const [value, setValue] = useState();
  const [copyData, setCopyData] = useState(data);

  const filteredCategory = (curCategory) => {
    const arr = copyData;
    const newArr = arr.filter((curElem) => {
      return curElem.category === curCategory.target.value;
    });
    if (
      curCategory.target.value === "All" ? setData(copyData) : setData(newArr)
    );
  };

  return (
    <div>
      <select
        className={styles.select}
        value={value}
        onChange={(curCategory) => filteredCategory(curCategory)}
      >
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Business">Business</option>
      </select>
    </div>
  );
}
