import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import PostDetail from '../../components/postDetail'

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.fileData.matter.title}</title>
      </Head>
      <div className='flex justify-center'>
        <article>
          <PostDetail postData={postData} />
        </article>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}