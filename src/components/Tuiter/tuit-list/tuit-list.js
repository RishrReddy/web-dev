import React,{useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {deleteTuit, findAllTuits}
    from "../actions/tuits-actions";


import TuitListItem from "./tuit-list-item";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     console.log("in tuit list");
    //     console.log(tuits)
    //     dispatch({
    //         type: 'FIND_ALL_TUITS',
    //         tuits: tuits
    //     });
    // }
    // useEffect(findAllTuits, []);
    useEffect(() =>
            findAllTuits(dispatch),
        []);

    return (
        <ul className=" list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;
