import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./tuiter.css";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div><div className="row">
            <div className="col-1">
                <img className="rounded-circle wd-follow-images" src="/images/elonmusk.jpg"/>
            </div>
            <div className="col-11 mt-1 px-5 mb-4">
                    <textarea value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)} className="form-control wd-textbox-style" placeholder="What's happening?">
                    </textarea>
                <hr/>
                <span >
                <a href="#"><i className="far fa-image me-3"></i></a>
                <a href="#"><i className="fa-solid fa-chart-line me-3"></i></a>
                <a href="#"><i className="far fa-smile me-3"></i></a>
                <a href="#"><i className="far fa-calendar me-3"></i></a>
                </span>
                <button onClick={tuitClickHandler} className="btn btn-primary btn-block rounded-pill float-end">
                    Tuit
                </button>
            </div>
        </div>


        </div>
    );
}
export default WhatsHappening;