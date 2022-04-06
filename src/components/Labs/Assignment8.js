import React from "react";
import {Link} from "react-router-dom";
const Assignment8 = () => {
    return(
        <>
            <Link to="/">
                Home
            </Link> |
            <Link to="/labs">
                Labs
            </Link> |
            <Link to="/tuiter/">
                Tuiter
            </Link>

            <div>
                <a href="https://web-dev-server-rish.herokuapp.com/" > Heroku Server </a>
            </div>

        </>
    )
}

export default Assignment8;