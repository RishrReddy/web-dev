import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (
                            {
                                 active = 'home'
                             }

                           ) => {

    const path = useLocation().pathname.split("/")
    const activeScreen = path[path.length - 1]
    return(
            <div>
                <div className="list-group">
                    <Link to="/"
                          className="list-group-item list-group-item-action">
                            <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/tuiter" className={`list-group-item list-group-item-action ${activeScreen === 'tuiter' || activeScreen === '' ? 'active' : ''}`}>
                            <div className="row">
                                <div className="col-2">
                                    <i className="fa fa-house-chimney "> </i>
                                </div>
                                <div className="col-10 text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block">
                                        <strong>
                                            Home
                                        </strong>
                                </div>
                            </div>
                    </Link>

                    <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${activeScreen === 'explore' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-2">
                                <i className="fa fa-hashtag fa-1x "> </i>
                            </div>
                            <div className="col-10 text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block">
                                    <strong>
                                        Explore
                                    </strong>
                            </div>
                        </div>
                    </Link>

                    <li className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-2">
                                <i className="fa fa-bell fa-1x"> </i>
                            </div>
                            <div className="col-10">
                                <a href="../../../../public/tuiter/notifications.html" className="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Notifications</strong></a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-2">
                                <i className="fa fa-envelope fa-1x"> </i>
                            </div>
                            <div className="col-10">
                                <a href="../../../../public/tuiter/messages.html" className="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Messages</strong></a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-2">
                                <i className="fa fa-bookmark fa-1x"> </i>
                            </div>
                            <div className="col-10">
                                <a href="../../../../public/tuiter/bookmarks.html" className="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Bookmarks</strong></a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-2">
                                <i className="fa fa-list fa-1x"> </i>
                            </div>
                            <div className="col-10">
                                <a href="../../../../public/tuiter/tuit.html" className="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Lists</strong></a>
                            </div>
                        </div>
                    </li>



                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${activeScreen === 'profile' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa fa-user fa-1x "> </i>
                        </div>
                        <div className="col-10 text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block">
                            <strong>
                                Profile
                            </strong>
                        </div>
                    </div>
                </Link>

                    <li className="list-group-item list-group-item-action">
                        <div className="row ">
                            <div className="col-2 mx=0">
                                 <span className="fa-stack ">
                                    <i className="fas fa-circle fa-stack-1x "></i>
                                    <i className="fas fa-ellipsis fa-stack-1x "></i>
                                </span>
                            </div>
                            <div className="col-10">
                                <a href="../../../../public/tuiter/more.html" className="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>More</strong></a>
                            </div>
                        </div>
                    </li>
                </div>
                <div className="d-grid mt-2">
                    <a href="../tweet.html"
                       className="btn btn-primary btn-block rounded-pill">
                        Tuit</a>
                </div>
            </div>
    );
}
export default NavigationSidebar;
