import React from "react";
import { PostData } from "../lib/posts";
import Post from "./post";
import { motion } from "framer-motion"

const Posts = ({ postsData, path }: { postsData: PostData[], path: string }) => {
  return (
    <div className="grid my-3 md:grid-cols-1 lg:grid-cols-3">
      {postsData.map((post) => {
        return (
          <motion.li
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="my-4 mx-1"
            key={post.fileData.id}
          >
            <div className="h-full">
              <Post postData={post} url={`${path}/${post.fileData.id}`} />
            </div>
          </motion.li>
        )
      })}
    </div >
  );
}

export default Posts;