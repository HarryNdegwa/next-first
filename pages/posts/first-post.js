import Link from "next/link";
import Head from "next/head";

const firstPost = () => {
  return (
    <div>
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
    </div>
  );
};

export default firstPost;
