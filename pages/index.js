import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Helloo, I am Harrison a Software Developer. I create enterprise
          software apps for businesses. At my free time i enjoy creating games
          or hangout with my girlfriend.
        </p>
        <p>
          <Link href="/posts/first-post">
            <a>First Post -</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
