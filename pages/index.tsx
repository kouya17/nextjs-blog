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
      current.fileData.matter.title.toLowerCase().includes(keyword.toLowerCase())
      || current.fileData.matter.abstract.toLowerCase().includes(keyword.toLowerCase())
      || current.fileData.matter.tags.includes(keyword)
    ) {
      pre.push(current.fileData.id)
    }
    return pre
  }
  return posts.reduce(reducer, [])
}

function getPostIdsByOR(keywords: string[], tagToPostIds: TagToPostIds): string[] {
  const reducer = (pre: string[], current: string) => {
    if (tagToPostIds[current]) {
      return Array.from(new Set<string>(pre.concat(tagToPostIds[current] as string[])))
    }
    return pre
  }
  return keywords.reduce(reducer, [])
}

function getPostIdsByAND(tags: string[], text: string, tagToPostIds: TagToPostIds, allPostIds: string[], idToPost: IdToPost): string[] {
  const reducer = (pre: string[], current: string) => {
    if (tagToPostIds[current]) {
      return pre.filter(item => tagToPostIds[current].includes(item))
    }
    return pre
  }
  const tagMatchIds = tags.reduce(reducer, allPostIds)
  // if text is empty, skip to search by text
  if (text === '') {
    return tagMatchIds
  }
  const tagMatchPosts = tagMatchIds.map(id => idToPost[id])
  return searchPostIds(text, tagMatchPosts)
}

function getPostsByTagsAndText(tags: string[], text: string, tagToPostIds: TagToPostIds, idToPost: IdToPost, allPostIds: string[]): PostData[] {
  const ids = getPostIdsByAND(tags, text, tagToPostIds, allPostIds, idToPost)
  const idToPostsReducer = (pre: PostData[], current: string) => {
    if (idToPost[current]) {
      pre.push(idToPost[current])
    }
    return pre
  }
  return ids.reduce(idToPostsReducer, [])
}

export default function Home({
  allPostsData, tags, tagToPostIds, idToPost, allPostIds
}: {
  allPostsData: PostData[], tags: string[], tagToPostIds: TagToPostIds, idToPost: IdToPost, allPostIds: string[]
}) {
  const [selectedTags, setSelectedTags] = useState([] as string[])
  const [searchText, setSearchText] = useState('' as string)
  const [renderPosts, setRenderPosts] = useState(allPostsData)
  const updateRenderPosts = (tags: string[], searchText: string) => {
    // if tags have searchText, set search Text empty to reduce calculation
    if (tags.includes(searchText))
    {
      searchText = ''
    }
    setRenderPosts(getPostsByTagsAndText(tags, searchText, tagToPostIds, idToPost, allPostIds))
  }
  const onTagClick = (tag: string, isPushed: boolean) => {
    var nowSelectedTags: string[] = [];
    if (isPushed) {
      nowSelectedTags = Array.from(new Set<string>([...selectedTags, tag]));
    } else {
      nowSelectedTags = selectedTags.filter(t => t !== tag);
    }
    setSelectedTags(nowSelectedTags);
    console.log(`selectedTags: ${nowSelectedTags}`);
    updateRenderPosts(nowSelectedTags, searchText)
  }
  const onSearchChange = (text: string) => {
    console.log(`seatchText: ${text}`)
    setSearchText(text)
    updateRenderPosts(selectedTags, text)
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
      <Search onChange={onSearchChange}/>
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
  const allPostIds = allPostsData.map((item) => {
    return item.fileData.id
  })
  return {
    props: {
      allPostsData,
      tags,
      tagToPostIds,
      idToPost,
      allPostIds
    }
  }
}