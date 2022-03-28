import React from "react";
import TodoItem from "./TodoItem.js";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;


//////////////////////////////////////////////////todos.js////////////////////////////////

// export default [
//     'Buy milk',
//     'Pickup the kids',
//     'Walk the dog'
// ];

// export default [
//     {   title: 'Buy milk',
//         status: 'CANCELED',
//     },
//     {   title: 'Pickup the kids',
//         status: 'IN PROGRESS',
//     },
//     {   title: 'Walk the dog',
//         status: 'DEFERRED',
//     }, ];
//

//export default [
//    {   title: 'Buy milk', status: 'CANCELED',
//        done: true,
//    },
//    {   title: 'Pickup the kids', status: 'IN PROGRESS',
//        done: false,
//    },
//    {   title: 'Walk the dog', status: 'DEFERRED',
//        done: false,
//    },];
