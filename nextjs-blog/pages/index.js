import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Hello there &#128075;, my name is Nathalie Reynosa!</h2>
        <p>Nice to meet you...</p>
        <p>I'm an aspiring Web Developer/Designer.</p>
        <p>Let's connect:</p> 
        <Link href="mailto:nathy.reynosa@protonmail.com">
          <a>nathy.reynosa@protonmail.com</a>
        </Link>
        <pre>By the way, I love to listen to Tori Kelly!</pre> 
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  )
}
