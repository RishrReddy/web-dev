const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <li class="list-group-item ${active === 'Home' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-house-chimney "> </i>
                        </div>
                        <div class="col-10">
                            <a href="../HomeScreen/index.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block">
                                <strong>
                                    Home
                                </strong>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item ${active === 'Explore' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-hashtag fa-1x "> </i>
                        </div>
                        <div class="col-10">
                            <a href="../ExploreScreen/index.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block">
                                <strong>
                                    Explore
                                </strong>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-bell fa-1x"> </i>
                        </div>
                        <div class="col-10">
                            <a href="../notifications.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Notifications</strong></a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-envelope fa-1x"> </i>
                        </div>
                        <div class="col-10">
                            <a href="../messages.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Messages</strong></a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-bookmark fa-1x"> </i>
                        </div>
                        <div class="col-10">
                            <a href="../bookmarks.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Bookmarks</strong></a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-list fa-1x"> </i>
                        </div>
                        <div class="col-10">
                            <a href="../tuit.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Lists</strong></a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-user fa-1x"> </i>
                        </div>
                        <div class="col-10">
                            <a href="../profile.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>Profile</strong></a>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row ">
                        <div class="col-2 mx=0">
                             <span class="fa-stack ">
                                <i class="fas fa-circle fa-stack-1x "></i>
                                <i class="fas fa-ellipsis fa-stack-1x "></i>
                            </span>
                        </div>
                        <div class="col-10">
                            <a href="../more.html" class="text-dark text-decoration-none d-none d-sm-none d-md-none d-lg-none d-xl-block"><strong>More</strong></a>
                        </div>
                    </div>
                </li>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="../tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
