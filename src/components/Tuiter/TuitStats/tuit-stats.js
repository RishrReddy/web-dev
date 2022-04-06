import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="wd-icon m-2">
            <span >
            <i className="icon-comment-alt icon far fa-comment wd-icon-text" aria-hidden="true"><span className="wd-icon-text">{tuit.stats.comments}</span></i>
            <i className="icon-random icon fas fa-retweet wd-icon-text" aria-hidden="true"><span className="wd-icon-text">{tuit.stats.retuits}</span></i>
                <span className=" wd-icon-text">
                {
                    tuit.liked &&
                    <i className=" fas fa-thumbs-up wd-icon-text fa-1x"
                       style={{color: tuit.liked ? 'blue': "white"}} onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: false
                    })}>  {tuit.likes}</i>
                }
                {
                    !tuit.liked &&
                    <i className="fas fa-thumbs-up wd-icon-text" onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true
                    })}>  {tuit.likes}</i>
                }
            </span>
                <span className=" wd-icon-text">
                    {
                        tuit.disliked &&
                        <i className="fas fa-thumbs-down wd-icon-text"
                           style={{color: tuit.disliked ? 'red': "white"}} onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            Dislikes: tuit.Dislikes - 1,
                            disliked: false
                        })}>  {tuit.Dislikes}</i>
                    }
                    {
                        !tuit.disliked &&
                        <i className="fas fa-thumbs-down me-2 wd-icon-text" onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            Dislikes: tuit.Dislikes + 1,
                            disliked: true
                        })}>  {tuit.Dislikes}</i>
                    }
            </span>
            <i className="icon-upload-alt icon fas fa-upload wd-icon-text ms-1" aria-hidden="true"/>
        </span>
        </div>
);
}
export default TuitStats;