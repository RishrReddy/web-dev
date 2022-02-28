const WhoToFollowListItem  = (who) => {
    return(`
             <div class="row  ">
                        <div class="col-2">
                            <img src=${who.avatarIcon} class=" wd-follow-images rounded-circle">
                        </div>
                        <div class="col-7 ">
                            <span class="wd-tuit-title">${who.userName}</span>
                            <span><i class="fa-solid fa-circle-check fa-1x"></i></span>
                            <p class=" wd-tuit-topic">@${who.handle} </p>
                        </div>
                        <div class="col-3">
                            <button type="button" class="btn btn-primary rounded-pill mt-2"><strong> Follow </strong></button>
                        </div>
             </div>
    `);
}

export default WhoToFollowListItem;