import Link from "next/link";

const firstPost = () => {
  return (
    <div>
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
