import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

const firstPost = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <a className="my-link" href="https://google.com" target="_blank">
          Visit Google
        </a>
        <Link href="/">
          <a className="my-link">Back to home</a>
        </Link>
      </Layout>
    </div>
  );
};

export default firstPost;
