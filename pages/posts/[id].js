import Layout from "../../components/layout";

const Post = () => {
  return <Layout></Layout>;
};

export default Post;

export async function getStaticPaths() {
  // return an array with possible values of id
}

export async function getStaticProps() {
  //called on build in production but in development it is called in every request
  //fetches necessary data for the posts with id
}
