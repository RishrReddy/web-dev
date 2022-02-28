import NavigationSidebar from "../NavigationSidebar/index.js";

import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2 justify-content-between">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    ${NavigationSidebar('Home')}
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 mt-2">
                   ${PostList()}
            </div>
             <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mx-0">
              ${PostSummaryList()}
            </div>
        </div>
    `);
})($);