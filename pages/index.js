import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sammy Odiagbe</title>
        <meta name="description" content="Sam Odiagbe" />
        <meta name="author" content="Sam Odiagbe" />
      </Head>
      <div className={styles.illustration}>
        <h1>Salut, I am Sam</h1>
        <h3>A curious weirdo</h3>
      </div>
      <div className={styles.mainContent}></div>
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

// export const getStaticProps = async (ctx) => {
//   const { API } = withSSRContext(ctx);
//   let posts = [];
//   try {
//     const res = await API.graphql({ query: listPosts, authMode: "AWS_IAM" });
//     const {
//       listPosts: { items },
//     } = res.data;
//     posts = items;
//   } catch (err) {
//     console.log("There was an error, ", err);
//   }

//   return {
//     props: {
//       posts,
//     },
//     // revalidate: 1,
//   };
// };
