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
      <div className="mx-1 my-5">
        <VideoPlayer src={postData.fileData.matter.m3u8} />
      </div>
      <div className="prose line-numbers my-5">
        <h2>調理時間</h2>
        <p>{postData.fileData.matter.time}分</p>
        <h2>おいしさ</h2>
        <p>{postData.fileData.matter.score}点(10点満点)</p>
        <div dangerouslySetInnerHTML={{ __html: postData.fileData.contentHtml }} />
      </div>
    </div>
  )
}

export default PostDetail