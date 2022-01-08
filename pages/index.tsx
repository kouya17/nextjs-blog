import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData, getAllTagList, PostData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Tags from '../components/tags'
import Posts from '../components/posts'
import { useState } from "react"
import Search from '../components/search'

interface TagToPostIds {
  [index: string]: string[];
}

interface IdToPost {
  [index: string]: PostData;
}

function searchPostIds(keyword: string, posts: PostData[]): string[] {
  const reducer = (pre: string[], current: PostData) => {
    if (
      //current.fileData.matter.title.indexOf(keyword) !== -1
      //||
      current.fileData.matter.tags.includes(keyword)
    ) {
      pre.push(current.fileData.id)
    }
    return pre
  }
  return posts.reduce(reducer, [])
}

function getPostsByTags(tags: string[], tagToPostIds: TagToPostIds, idToPost: IdToPost): PostData[] {
  const reducer = (pre: string[], current: string) => {
    if (tagToPostIds[current]) {
      return Array.from(new Set<string>(pre.concat(tagToPostIds[current] as string[])))
    }
    return pre
  }
  const ids = tags.reduce(reducer, [])
  const idToPostsReducer = (pre: PostData[], current: string) => {
    if (idToPost[current]) {
      pre.push(idToPost[current])
    }
    return pre
  }
  return ids.reduce(idToPostsReducer, [])
}

export default function Home({
  allPostsData, tags, tagToPostIds, idToPost
}: {
  allPostsData: PostData[], tags: string[], tagToPostIds: TagToPostIds, idToPost: IdToPost
}) {
  const [selectedTags, setSelectedTags] = useState([] as string[])
  const [renderPosts, setRenderPosts] = useState([] as PostData[])
  const onTagClick = (tag: string, isPushed: boolean) => {
    var nowSelectedTags: string[] = [];
    if (isPushed) {
      nowSelectedTags = Array.from(new Set<string>([...selectedTags, tag]));
    } else {
      nowSelectedTags = selectedTags.filter(t => t !== tag);
    }
    setSelectedTags(nowSelectedTags);
    console.log(`selectedTags: ${nowSelectedTags}`);
    setRenderPosts(getPostsByTags(nowSelectedTags, tagToPostIds, idToPost))
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='my-4 font-bold text-2xl'>記事一覧</h1>
      <h2 className='mt-4 mb-2 text-lg'>キーワードで絞り込む</h2>
      <Tags tags={tags} onClick={onTagClick}/>
      <h2 className='mt-4 mb-2 text-lg'>任意の単語で絞り込む</h2>
      <Search />
      <section>
        <ul>
          <Posts postsData={renderPosts} path="/posts"/>
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  const tags = getAllTagList(allPostsData)
  var tagToPostIds = {} as TagToPostIds
  tags.forEach((tag) => {
    tagToPostIds[tag] = searchPostIds(tag, allPostsData)
  })
  var idToPost = {} as IdToPost
  allPostsData.forEach((post) => {
    idToPost[post.fileData.id] = post
  })
  return {
    props: {
      allPostsData,
      tags,
      tagToPostIds,
      idToPost
    }
  }
}