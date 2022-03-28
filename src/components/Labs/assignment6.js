import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import {Link} from "react-router-dom";
const Assignment6 = () => {
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

            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoList/>
        </>
    )
}

export default Assignment6;