import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";
import {deleteTuit} from "../actions/tuits-actions";

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
            // const deleteTuit = (tuit) => {
            //     dispatch({type: 'delete-tuit', tuit})
            // };
    return(
                    <div>
                        <div className="row mb-2 border-bottom">
                            <div className="col-1 mt-2">
                                <img src={tuit.logo} className="wd-follow-images rounded-circle" alt="ProfilePic"/>
                            </div>
                            <div className="col-11 mt-1 px-5 ">
                                <div className="row">
                                    <div className="col-11">
                                        <span className="text-white fw-bold">{tuit.postedBy.username} </span>
                                        <span> @{tuit.handle}</span>
                                    </div>
                                    <div className="col-1">
                                        <span><i className="fas fa-remove float-end"
                                                 onClick={() => deleteTuit(
                                                     dispatch, tuit)}/>
                                        </span>
                                    </div>

                                </div>
                                <div className="text-white">
                                    {tuit.tuit}
                                </div>
                                <div className="wd-image-container mt-2">
                                    {Attachment(tuit)}
                                </div>
                                    <TuitStats tuit={tuit}/>
                            </div>
                        </div>
                    </div>

                )
}
export default TuitItem;