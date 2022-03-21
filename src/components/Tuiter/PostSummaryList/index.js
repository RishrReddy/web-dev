import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.json"

const PostSummaryList = () => {
    return (
    <div className="tuits">
          {post.map(post => {
                return(<PostSummaryItem post = {post} />);
            })
          }
    </div>
); }

export default PostSummaryList;
