import Link from "next/link";
import styles from "../../styles/header.module.css";
import SearchBar from "../SearchBar";
import { useState, useEffect } from "react";
import Dropdown from "../Category";

export default function Header({ setData, data }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logotext}>
          <span>B</span>logger.
        </h1>
      </div>
      <SearchBar setData={setData} data={data} />
      <div className="dropdown">
        <Dropdown setData={setData} data={data} />
      </div>
    </header>
  );
}
