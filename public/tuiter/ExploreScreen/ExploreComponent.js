import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                    <div class="col-11">
                        <div class="border rounded-pill wd-search bg-white">
                            <div class="input-group-addon wd-mag-glass">
                                <i class="fa-solid fa-magnifying-glass "></i>
                            </div>
                            <input class="form-control shadow-none rounded-pill" type="text"
                                   placeholder=" Search Tuiter"/>
                        </div>
                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-gear fa-2x" style="color:#0dcaf0"></i>
                    </div>
           </div>
           <ul class="nav mt-2 nav-tabs">
                      <!-- tabs -->
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-sm-none d-md-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
           </ul>
           <!-- image with overlaid text -->
           
           <div class="wd-image-box mt-2">
                <img src="../../images/starship.jpg" class="wd-image-explore">
                <div class="bottom-left-text wd-large-font">SpaceX's Starship</div>
            </div>
           <div class="wd-bg-tuit">
                 ${PostSummaryList()}
           </div>
           
    `);
}
export default ExploreComponent;
