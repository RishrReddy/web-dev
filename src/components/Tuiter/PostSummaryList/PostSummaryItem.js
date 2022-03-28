import React from "react";

const PostSummaryItem  = ({
                              post = {
                                  topic: 'Web Development',
                                  userName: 'ReactJS',
                                  time: '2h',
                                  image: '/images/react.png',
                                  title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                              }
    }) => {
    return(
        <div>
            <div className="row mx-0  border-bottom wd-bg-tuit">
                <div className="col-10 ">
                    <div className="p-2">
                        <p className=" mb-0 wd-tuit-topic">{post.topic} </p>
                        <span className="wd-tuit-title text-white">{post.userName} </span>
                        <span><i className="fa-solid fa-circle-check fa-1x fa-inverse"/></span>
                        <span className="wd-tuit-topic"> - {post.time}</span>
                        <p className="wd-tuit-title mb-1 text-white"> {post.title}</p>
                    </div>

                </div>
                <div className="col-2">
                    <img src={post.image} className="wd-tuit-explore mt-2 rounded-3" alt="img"/>
                </div>
            </div>
        </div>

    )
}
export default PostSummaryItem;