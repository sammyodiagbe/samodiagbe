import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const createPost = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Sammy Odiagbe</title>
        <meta name="description" content="Sam Odiagbe blog" />
        <meta name="author" content="Sam Odiagbe" />
      </Head>
      <div>
        <form onSubmit={createPost}>
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
    </div>
  );
}
