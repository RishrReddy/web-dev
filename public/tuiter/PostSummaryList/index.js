import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"

const PostSummaryList = () => {
    return (`
    <div class="tuits">
          ${post.map(post => {
                return(PostSummaryItem(post));
            }).join('')} 
    </div>
`); }

export default PostSummaryList;
