import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import "./explore.css";

const ExploreComponent = () => {
    return(
        <div>
            <div className="row">
                <div className="col-11">
                    <div className="border rounded-pill wd-search bg-white">
                        <div className="input-group-addon wd-mag-glass">
                            <i className="fa-solid fa-magnifying-glass "></i>
                        </div>
                        <input className="form-control shadow-none rounded-pill" type="text"
                               placeholder=" Search Tuiter"/>
                    </div>
                </div>
                <div className="col-1">
                    <i className="fa-solid fa-gear fa-2x" ></i>
                </div>
            </div>
            <ul className="nav mt-2 nav-tabs">

                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-sm-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>


            <div className="wd-image-box mt-2">
                <img src={'/images/starship.jpg'} className="wd-image-explore"  alt="img"/>
                    <div className={"bottom-left-text wd-large-font"}>SpaceX's Starship</div>
            </div>
            <div className="wd-bg-tuit">
                <PostSummaryList/>
            </div>
        </div>
    );
}
export default ExploreComponent;
