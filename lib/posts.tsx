import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface PostMatter {
  date: string;
  title: string;
  tags: string[];
  abstract: string;
}

export interface PostFileData {
  id: string;
  matter: PostMatter;
  contentHtml: string;
}

export interface PostData {
  fileData: PostFileData;
  view?: number;
}

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData(): Promise<PostData[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: PostData[] = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const contentHtml = await matterResultToHtml(matterResult)

    // Combine the data with the id
    return {
      fileData: {
        id: id,
        matter: matterResult.data as PostMatter,
        contentHtml: contentHtml
      },
      view: 0
    }
  }))
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.fileData.matter.date < b.fileData.matter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const contentHtml = await matterResultToHtml(matterResult)

  // Combine the data with the id and contentHtml
  return {
    fileData: {
      id: id,
      matter: matterResult.data as PostMatter,
      contentHtml: contentHtml
    },
    view: 0
  }
}

export function getAllTagList(allPostsData: PostData[]): string[] {
  const reducer = (pre: string[], current: PostData) => pre.concat(current.fileData.matter.tags)
  return Array.from(new Set<string>(allPostsData.reduce(reducer, [])))
}

async function matterResultToHtml(matterResult: matter.GrayMatterFile<string>): Promise<string> {
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  return processedContent.toString()
}