import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return (`
    <div class="posts">
          ${posts.map(posts => {
        return(PostItem(posts));
    }).join('')} 
    </div>
`); }

export default PostList;