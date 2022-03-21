import React from "react"
const PostItem  = ({
    posts = {
        user: "Elon Musk",
        handle: "elonmusk",
        user_image: "/images/elonmusk.jpg",
        time: "2h",
        caption: "Amazing show about @inspiration4x mission",
        caption_link : "@inspiration4x",
        image: "../images/inspiration4x.jpg",
        description_title: "Countdown Inspirational4 Mission to Space | Netflix Official Site",
        description: "From training to launch launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
        link:"netflix.com",
        comments:"4.2k",
        retuit:"3.5k",
        likes:"37.5k"
    }
}) => {
    return(
        <div>
            <div className="row mb-2 border-bottom">
                <div className="col-1 mt-2">
                    <img src={posts.user_image} className="wd-follow-images rounded-circle"/>
                </div>
                <div className="col-11 mt-1 px-5 ">
                    <div className="row">
                        <div className="col-11">
                            <span className="text-white fw-bold">{posts.user} </span>
                            <span><i className="fa-solid fa-circle-check fa-1x fa-inverse"></i></span>
                            <span> @{posts.handle}</span>
                            <span> . {posts.time}</span>
                        </div>
                        <div className="col-1">
                            <span><i className="fa-solid fa-ellipsis fa-1x "></i></span>
                        </div>

                    </div>
                    <div className="text-white">
                        {posts.caption}
                        <a href="#">{posts.caption_link}</a>
                    </div>
                    <div className="wd-image-container mt-2">
                        <div>
                            <img className="wd-bm-image" src={posts.image}/>
                        </div>
                        <div className="wd-border-radius mt-2 p-2 text-white">
                            {posts.description_title}
                            <div className="text-secondary">
                                {posts.description}
                            </div>
                            <div>
                                <span className="text-secondary"><i class="fas fa-link"></i> {posts.link}</span>
                            </div>
                        </div>
                    </div>
                    <div className="wd-icons ms-3 mt-2 ">
                        <a href="#" className="wd-icon-text"><i className="icon-comment-alt icon far fa-comment" aria-hidden="true"><span className="wd-icon-text">{posts.comments}</span></i></a>
                        <a href="#" className="wd-icon-text"><i className="icon-random icon fas fa-retweet" aria-hidden="true"><span className="wd-icon-text">{posts.retuit}</span></i> </a>
                        <a href="#" className="wd-icon-text"><i className="icon-heart icon red fas fa-heart " aria-hidden="true"><span className="wd-icon-text">{posts.likes}</span></i></a>
                        <a href="#" className="wd-icon-text"><i className="icon-upload-alt icon fas fa-upload" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PostItem;