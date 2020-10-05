import Link from "next/link";

import Layout from "../components/layout";

const custom404 = () => {
  return (
    <Layout>
      <div>
        <h3>Ooops!!!</h3>
        <p>You are fucked!</p>
        <p>The page you requested is not found!</p>
        <Link href="/">
          <a>I can take you home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default custom404;
