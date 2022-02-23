import React, { useEffect } from "react"
import { PostData } from "../lib/posts";
import Date from "./date"
import Prism from 'prismjs';
import VideoPlayer from "./videoPlayer"

interface PostDetailProps {
  postData: PostData
}

const PostDetail = ({ postData }: PostDetailProps) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mt-5 mb-3">
        {postData.fileData.matter.title}
      </h1>
      <div className="my-2">
        <Date dateString={postData.fileData.matter.date} />
      </div>
      <div className="m-1">
        <VideoPlayer src={postData.fileData.matter.m3u8} />
      </div>
      <div className="prose line-numbers">
        <div dangerouslySetInnerHTML={{ __html: postData.fileData.contentHtml }} />
      </div>
    </div>
  )
}

export default PostDetail