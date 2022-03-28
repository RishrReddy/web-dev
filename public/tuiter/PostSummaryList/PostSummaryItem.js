const PostSummaryItem  = (post) => {
    return(`
            <div class="row mx-0  border-bottom wd-bg-tuit">
                    <div class="col-10 ">
                        <div class="p-2">
                            <p class=" mb-0 wd-tuit-topic">${post.topic} </p>
                                <span class="wd-tuit-title text-white">${post.userName}</span>
                                <span><i class="fa-solid fa-circle-check fa-1x fa-inverse"></i></span>
                                <span class="wd-tuit-topic">- ${post.time}</span>
                            <p class="wd-tuit-title mb-1 text-white"> ${post.title}</p>
                        </div>

                    </div>
                    <div class="col-2">
                        <img src="${post.image}" class="wd-tuit-explore mt-2 rounded-3">
                    </div>
                </div>
    `)
}
export default PostSummaryItem;