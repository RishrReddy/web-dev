import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {

        console.log(tuit.stats.comments);
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="wd-icons ms-3 mt-2 ">
            <span >
            <i className="icon-comment-alt icon far fa-comment wd-icon-text" aria-hidden="true"><span className="wd-icon-text">{tuit.stats.comments}</span></i>
            <i className="icon-random icon fas fa-retweet wd-icon-text" aria-hidden="true"><span className="wd-icon-text">{tuit.stats.retuits}</span></i>
            <span className=" wd-icon-text" onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className=" icon-random icon fas fa-heart me-2"
                       style={{color: tuit.liked ? 'red': "white"}}/>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-2"/>
                }
                <span>{tuit.stats.likes}</span>
            </span>
            <i className="icon-upload-alt icon fas fa-upload wd-icon-text" aria-hidden="true"/>
        </span>
        </div>
);
}
export default TuitStats;