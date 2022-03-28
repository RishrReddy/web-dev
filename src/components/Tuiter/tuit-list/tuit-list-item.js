import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";


const Attachment = (tuit) =>{
    if(("attachments" in tuit)){
        if(("video" in tuit.attachments)){
            return(
                <div className="rounded">
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                        className="rounded-3"
                    />
                </div>

            )
        }else if(("image" in tuit.attachments)){
            return(<img className="wd-bm-image" src={tuit.attachments.image} alt="img"/>)
        }
    }
}


const TuitItem  = ({tuit}) => {
            const dispatch = useDispatch();
            const deleteTuit = (tuit) => {

                dispatch({type: 'delete-tuit', tuit})
            };


    return(
                    <div>
                        <div className="row mb-2 border-bottom">
                            <div className="col-1 mt-2">
                                <img src={tuit.logo} className="wd-follow-images rounded-circle" alt="img"/>
                            </div>
                            <div className="col-11 mt-1 px-5 ">
                                <div className="row">
                                    <div className="col-11">
                                        <span className="text-white fw-bold">{tuit.postedBy.username} </span>
                                        {/*<span><i className="fa-solid fa-circle-check fa-1x fa-inverse"></i></span>*/}
                                        <span> @{tuit.handle}</span>

                                        {/*<span> . {posts.time}</span>*/}
                                    </div>
                                    <div className="col-1">
                                        <span><i onClick={() =>
                                            deleteTuit(tuit)}
                                                 className="fas fa-remove fa-pull-right"/></span>
                                    </div>

                                </div>
                                <div className="text-white">
                                    {tuit.tuit}
                                    {/*<a href="tuiter/home">{posts.caption_link}</a>*/}
                                </div>
                                <div className="wd-image-container mt-2">
                                    {Attachment(tuit)}
                                    {/*<div>*/}
                                    {/*    <img className="wd-bm-image" src={posts.image} alt="img"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="wd-border-radius mt-2 p-2 text-white">*/}
                                    {/*    {posts.description_title}*/}
                                    {/*    <div className="text-secondary">*/}
                                    {/*        {posts.description}*/}
                                    {/*    </div>*/}
                                    {/*    <div>*/}
                                    {/*        <span className="text-secondary"><i class="fas fa-link"/> {posts.link}</span>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                {/*<div className="wd-icons ms-3 mt-2 ">*/}
                                    <TuitStats tuit={tuit}/>
                                    {/*<a href="/tuiter/home" className="wd-icon-text"><i className="icon-comment-alt icon far fa-comment" aria-hidden="true"><span className="wd-icon-text">{tuit.stats.comments}</span></i></a>*/}
                                    {/*<a href="/tuiter/home" className="wd-icon-text"><i className="icon-random icon fas fa-retweet" aria-hidden="true"><span className="wd-icon-text">{tuit.stats.retuits}</span></i> </a>*/}
                                    {/*<button className="wd-icon-text" onClick={ ()=> updateLiked(tuit)}> <i className="wd-icon-text icon-heart icon fas fa-heart " aria-hidden="true"><span className="wd-icon-text">{tuit.stats.likes}</span></i> </button>*/}
                                    {/*<a href="/tuiter/home" className="wd-icon-text"><i className="icon-upload-alt icon fas fa-upload" aria-hidden="true"/></a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                )
}
export default TuitItem;