const PostItem  = (posts) => {
    return(`
            <div class="row mb-2 border-bottom">
                        <div class="col-1 mt-2">
                            <img src="${posts.user_image}" class="wd-follow-images rounded-circle">
                        </div>
                        <div class="col-11 mt-1 px-5 ">
                            <div class="row">
                                <div class="col-11">
                                    <span class="text-white fw-bold">${posts.user}</span>
                                    <span><i class="fa-solid fa-circle-check fa-1x fa-inverse"></i></span>
                                    <span>@${posts.handle}</span>
                                    <span> . ${posts.time}</span>
                                </div>
                                <div class="col-1">
                                    <span><i class="fa-solid fa-ellipsis fa-1x "></i></span>
                                </div>
                        
                            </div>
                            <div class="text-white">
                            ${posts.caption}
                        </div>
                        <div class="wd-image-container mt-2">
                            <div>
                            <img class="wd-bm-image" src="${posts.image}">
                            </div>
                            <div class="wd-border-radius mt-2 p-2 text-white">
                                ${posts.description_title}
                                <div class="text-secondary">
                                 ${posts.description}
                                </div>
                                <div>
                                <span class="text-secondary">${posts.link}</span>
                                </div>
                            </div>
                        </div>
                            <div class="wd-icons ms-3 mt-2 ">
                                <a href="#" class="wd-icon-text"><i class="icon-comment-alt icon far fa-comment" aria-hidden="true"><span class="wd-icon-text">${posts.comments}</span></i></a>
                                <a href="#" class="wd-icon-text"><i class="icon-random icon fas fa-retweet" aria-hidden="true"><span class="wd-icon-text">${posts.retuit}</span></i> </a>
                                <a href="#" class="wd-icon-text"><i class="icon-heart icon red fas fa-heart " aria-hidden="true"><span class="wd-icon-text">${posts.likes}</span></i></a>
                                <a href="#" class="wd-icon-text"><i class="icon-upload-alt icon fas fa-upload" aria-hidden="true"></i></a>
                            </div>  
                        </div>
                   </div>
    `)
}
export default PostItem;