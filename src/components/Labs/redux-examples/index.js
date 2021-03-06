import React from "react";
import {Provider} from "react-redux";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import {combineReducers, createStore} from "redux";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer"
import Todos from "./reducers/todos-component";

const reducers = combineReducers({hello, todos})
const store = createStore(reducers);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );

};
export default ReduxExamples;