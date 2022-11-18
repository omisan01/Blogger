import Link from "next/link";
import styles from "../../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logotext}>
          <span>B</span>logger.
        </h1>
      </div>
    </header>
  );
}
