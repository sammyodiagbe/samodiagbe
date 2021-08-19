import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { createPost } from "../src/graphql/mutations";
import { listPosts } from "../src/graphql/queries";
import { API, graphqlOperation, withSSRContext, Auth } from "aws-amplify";
import { onCreatePost } from "../src/graphql/subscriptions";

export default function Home({ posts: incomingPost }) {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(incomingPost);
    API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: ({ provider, value }) => console.log({ provider, value }),
      error: (error) => console.log(error),
    });
  }, [posts]);
  const createNewPost = async (event) => {
    event.preventDefault();
    try {
      const response = await API.graphql(
        graphqlOperation(createPost, { input: { postTitle, postBody } })
      );
      setPostTitle("");
      setPostBody("");
    } catch (err) {
      console.log("Something went wrong, ", err);
    }
  };

  const renderPosts = posts.length ? (
    posts.map((post, index) => {
      return (
        <div className={styles.apost} key={index}>
          <h2>{post.postTitle}</h2>
          <p>{post.postBody}</p>
        </div>
      );
    })
  ) : (
    <p>No posts oo</p>
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Sammy Odiagbe</title>
        <meta name="description" content="Sam Odiagbe blog" />
        <meta name="author" content="Sam Odiagbe" />
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.createPostContainer}>
          {/* <AmplifySignOut /> */}
          <form onSubmit={createNewPost}>
            <div>
              <input
                type="text"
                placeholder="Post title"
                onChange={(e) => setPostTitle(e.target.value)}
                value={postTitle}
              />
            </div>
            <div>
              <textarea
                placeholder="Post body"
                onChange={(e) => setPostBody(e.target.value)}
                value={postBody}
              />
            </div>
            <div>
              <button>Create post</button>
            </div>
          </form>
        </div>
        <div className={styles.postsContainer}>{renderPosts}</div>
      </div>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const { API } = withSSRContext();
//   let paths = [];
//   try {
//     const res = await API.graphql(graphqlOperation(listPosts));
//     paths = res.data.map((post) => ({ params: { id: post.id } }));
//   } catch (err) {
//     console.log("Static paths error: ", err);
//   }
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async (ctx) => {
  const { API } = withSSRContext(ctx);
  let posts = [];
  try {
    const res = await API.graphql({ query: listPosts, authMode: "AWS_IAM" });
    const {
      listPosts: { items },
    } = res.data;
    posts = items;
  } catch (err) {
    console.log("There was an error, ", err);
  }

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
