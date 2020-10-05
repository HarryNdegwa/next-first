import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  // return an array with possible values of id
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //called on build in production but in development it is called in every request
  //fetches necessary data for the posts with id
  const postData = getPostData(params.id);
  return {
    props: postData,
  };
}
