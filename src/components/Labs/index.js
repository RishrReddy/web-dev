import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import ReduxExamples from "./redux-examples";
import Assignment6 from "./assignment6";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/">
                Tuiter
            </Link> |
            <Link to="/labs/a6">
                Assignment 6
            </Link> |
            <Link to="/labs/a7">
                Assignment 7
            </Link>

        </>
    )
};

export default Labs;
