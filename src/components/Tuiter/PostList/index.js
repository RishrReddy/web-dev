import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json"

const PostList = () => {
    return (
    <div className="posts">
        { posts.map(posts => {
            return(<PostItem posts={posts}/>);})
        }
    </div>
    );
};

export default PostList;