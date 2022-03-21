import React from "react";

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json"
const WhoToFollowList = () => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="fw-bold">Who to follow</span>
                </li>
                <li className="list-group-item">
                    {
                        who.map(who => {
                            return (<WhoToFollowListItem who = {who}/>);
                        })
                    }
                </li>
            </ul>
        </div>
); }

export default WhoToFollowList;
