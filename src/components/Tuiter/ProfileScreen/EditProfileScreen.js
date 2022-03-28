import React, {useState} from "react";
import {Link} from "react-router-dom";                        // useNavigate: use to go back previous route
import {useDispatch, useSelector} from "react-redux";

const EditProfile = () => {
    const data = useSelector((state) => state.profile);
    let [profile, setProfile] = useState(
        data[0]
    );
    const dispatch = useDispatch();
    const saveProfile = () => {
        dispatch({type: 'save-profile',
            profile: profile
        }

        );
        return({

        })
    }

    return(
        <div className="ms-0">
            <div>
                <span className="ms-2 mt-2">
                    <Link to="/tuiter/profile" >
                        <i className="fa fa-xmark fa-1x fa-inverse"> </i>
                    </Link> </span>
                <span className="mt-2 ms-4 fw-bolder wd-edit-profile-heading">Edit Profile</span>
                <span>
                    <Link to="/tuiter/profile" >
                        <button className="btn btn-secondary rounded-pill float-end" onClick={saveProfile}>
                                Save
                        </button>
                    </Link>
                </span>

                <div className="container mt-3 p-0 ">
                    <img className="wd-tweet-banner-position-edit" src={profile.bannerPicture} alt="banner"/>
                    <div className="wd-camera-banner"><i className="fa-solid fa-camera fa-1x"/></div>
                    <div className="wd-xmark-banner"><i className="fa-solid fa-xmark fa-1x"/></div>
                    <div>
                        <img className="wd-tweet-profile-position-edit" src={profile.profilePicture} alt="profile"/>
                        <div className="wd-camera-profile"><i className="fa-solid fa-camera fa-1x"/></div>
                    </div>
                    <div className="wd-grey-border mb-2">
                        <div className="mt-0 ">Name</div>
                        <textarea id="name" className="bg-black text-white border-0 d-inline wd-textarea-width" rows="1"
                                  placeholder={profile.firstName}
                                  onChange={(event) => setProfile({...profile, firstName: event.target.value})}/>
                    </div>

                    <div className="wd-grey-border mb-2">
                        <div className="mt-0">Bio</div>
                        <textarea id="loc" className="bg-black  text-white border-0 wd-changecolor-placeholder wd-textarea-width" rows="3"
                                  placeholder={profile.bio}
                                  onChange={(event) => setProfile({...profile, bio: event.target.value})}/>
                    </div>
                    <div className="wd-grey-border mb-2">
                        <div className="mt-0">Location</div>
                        <textarea id="website" className="bg-black text-white border-0 wd-textarea-width" rows="1"
                                  placeholder={profile.location}
                                  onChange={(event) => setProfile({...profile, location: event.target.value})}/>
                    </div>
                    <div className="wd-grey-border mb-2">
                        <div className="mt-0">Website</div>
                        <textarea id="dob" className="bg-black text-white border-0 wd-textarea-width" rows="1"
                                  placeholder={profile.website}
                                  onChange={(event) => setProfile({...profile, website: event.target.value})}/>
                    </div>
                    <div className="wd-grey-border mb-2">
                        <div className="mt-0">Date of Birth</div>
                        <input placeholder={profile.dataOfBirth} className="bg-black text-white border-0 wd-textarea-width"
                               type="text" id="dob"
                               onChange={(event) => setProfile({...profile, dataOfBirth: event.target.value})}/>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default EditProfile;
