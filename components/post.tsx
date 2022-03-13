import React, { useEffect } from "react"
import { PostData } from "../lib/posts"
import Link from 'next/link'
import Tags from "../components/tags"
import Date from "./date";
import VideoPlayer from "./videoPlayer"

interface PostProps {
  postData: PostData,
  url: string
}

const Post = ({ postData, url }: PostProps) => {
  const smallTagStyles = {
    unPushedButttonClass: 'bg-gray-0 text-sm',
    pushedButtonClass: 'bg-gray-0 text-sm'
  }

  return (
    <Link href={url}>
      <a>
        <div className="flex p-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm break-all h-full relative">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg m-1 line-clamp-2">
              {postData.fileData.matter.title}
            </h2>
            <div className="m-1">
              <Tags tags={postData.fileData.matter.tags} styles={smallTagStyles} />
            </div>
            {/*
            <p className="m-1 line-clamp-3">
              {postData.fileData.matter.abstract}
            </p>
            */}
            <div className="m-1">
              <VideoPlayer src={postData.fileData.matter.m3u8} isHoverPlay={true} />
            </div>
            <small className="m-1 flex">
              <div className="mr-3">調理時間: {postData.fileData.matter.time}分</div>
              <div className="mr-3">おいしさ: {postData.fileData.matter.score}/10</div>
              <div className="ml-auto">
                <Date dateString={postData.fileData.matter.date} />
              </div>
            </small>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Post;