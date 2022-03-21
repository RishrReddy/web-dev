import React from "react";
import {Link} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowList from "./WhoToFollowList";
// import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return(
        <>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<PostSummaryList/>*/}
            <ExploreScreen/>
            <HomeScreen/>
        </>
    )
};

export default Tuiter;
