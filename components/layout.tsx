import Head from 'next/head'
import Link from 'next/link'
import Navigation from './navigation'

export const siteTitle = 'Cooking Timelaps Vlog'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="主に料理のタイムラプス動画を載せているブログです。"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Navigation
        title={siteTitle}
        menu={[{name: 'aaa', path: '/'}, {name: 'bbb', path: '/'}]}
      />
      <div className='container mx-auto px-4'>
        <main>{children}</main>
        {!home && (
          <div className='py-3'>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}