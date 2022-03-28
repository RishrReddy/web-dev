import React from "react";
import ReduxExamples from "./redux-examples";
import {Link} from "react-router-dom";
const Assignment7 = () => {
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

            <ReduxExamples/>
        </>
    )
}

export default Assignment7;