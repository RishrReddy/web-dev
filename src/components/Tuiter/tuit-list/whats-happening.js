import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./tuiter.css";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    // const [newTuit, setNewTuit] =
    //     useState({tuit: 'New tuit'});

    return (
        <div><div className="row">
            <div className="col-1">
                <img className="rounded-circle wd-follow-images" src="/images/elonmusk.jpg"/>
            </div>
            <div className="col-11 mt-1 px-5 mb-4">
                    <textarea className="form-control wd-textbox-style" placeholder="What's happening?"
                              onChange={(event) =>
                                  setWhatsHappening({...whatsHappening,
                                      tuit: event.target.value})} >
                    </textarea>
                <hr/>
                <span >
                <a href="#"><i className="far fa-image me-3"/></a>
                <a href="#"><i className="fa-solid fa-chart-line me-3"/></a>
                <a href="#"><i className="far fa-smile me-3"/></a>
                <a href="#"><i className="far fa-calendar me-3"/></a>
                </span>
                <button onClick={() =>
                    createTuit(dispatch, whatsHappening)} className="btn btn-primary btn-block rounded-pill float-end">
                    Tuit
                </button>
                {/*<textarea className="form-control w-75"*/}
                {/*          onChange={(e) =>*/}
                {/*              setNewTuit({...newTuit,*/}
                {/*                  tuit: e.target.value})}/>*/}
            </div>
        </div>


        </div>
    );
}
export default WhatsHappening;