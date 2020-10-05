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
        <p>The quick brown fox jumped over the lazy dog.</p>
      </Layout>
    </div>
  );
};

export default firstPost;
