import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

// pages/404.js
export default function Custom404() {

  return ( 
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <body>    
        <h1>404 - Wow there buddy can't find that page for ya!</h1>
        <h2> What I can say is I recommend you go back home!</h2>
        <Link href="/">
            <a>← Back to home</a>
        </Link>
      </body>
    </Layout>
  )
}
