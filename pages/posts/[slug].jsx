import styles from "../../styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cla42z6uz3aqt01uo6l9r7p7o/master"
);
const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      date
      description
      category              
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverImage {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
export default function BlogPost({ post }) {
  return (
    <div>
      <Link className={styles.goback} href="/">
        <span>&#8592;</span> Go Back
      </Link>
      <main className={styles.blog}>
        <header>
          <h2>{post.title}</h2>
        </header>
        <img src={post.coverImage.url} className={styles.cover} alt="" />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
        <div className={styles.title}>
          <img src={post.author.avatar.url} alt="" />
          <div className={styles.authtext}>
            <h6> By {post.author.name}</h6>
            <h6 className={styles.publisheddate}>{post.date}</h6>
          </div>
        </div>
      </main>
    </div>
  );
}
