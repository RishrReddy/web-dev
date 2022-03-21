import React from "react";

const WhoToFollowListItem  = (
    {
          who = {
              avatarIcon: '/images/nasa.jpg',
              userName: 'NASA',
              handle: 'NASA',
          }
    }) => {
    return(
        <div>
            <div className="row  ">
                        <div className="col-2">
                            <img src={who.avatarIcon} width="48" className="rounded-circle float-start"  alt={"img"}/>
                        </div>
                        <div className="col-7 ">
                            <span className="wd-tuit-title">{who.userName} </span>
                            <span><i className="fa-solid fa-circle-check fa-1x"></i></span>
                            <p className=" wd-tuit-topic">@{who.handle} </p>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-primary rounded-pill mt-2 wd-max-width"><strong> Follow </strong></button>
                        </div>
            </div>
         </div>
    );
}

export default WhoToFollowListItem;