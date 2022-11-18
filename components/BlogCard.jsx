import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export default function BlogPost({
  title,
  author,
  coverImage,
  date,
  slug,
  description,
  category,
}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img src={coverImage.url} alt="hello" />
        </div>
      </Link>

      <div className={styles.details}>
        <div className={styles.author}>
          <p>
            {author.name} | {date}
          </p>
        </div>
      </div>
      <div className={styles.category}>
        <p>{category}</p>
      </div>

      <div className={styles.text}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
