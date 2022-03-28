import React from "react";
import "./profile.css"
import {Link} from "react-router-dom";

const ProfileScreen = ({profile}) => {
    return(
            <div>
                <div className="row">
                    <div className="col-2 mt-2">
                        <Link to="/tuiter/" >
                            <i className="fa fa-arrow-left fa-2x fa-inverse"> </i>
                        </Link>
                    </div>
                    <div className="col-10 px-0">
                        <h5 className="mb-0 fw-bold">{profile.firstName} {profile.lastName}</h5>
                        <p className="mb-0 fg-color-726D6D wd-font-size-15px">{profile.tweets} Tweets</p>
                    </div>
                </div>
                <img className=" wd-tweet-banner-position mt-2" src={profile.bannerPicture} alt={"banner"}/>
                <img className="wd-tweet-profile-position" src={profile.profilePicture} alt="profile"/>
                <button className=" mt-2 wd-edit-profile rounded-pill float-end ">
                    <Link to="/tuiter/editprofile" >
                        <span className="fw-bold text-white wd-text-decor-none" >Edit profile</span>
                    </Link>
                </button>

                <div>
                    <h5 className=" ms-2 fw-bold">{profile.firstName} {profile.lastName}</h5>
                    <h6 className=" ms-2 wd-greyed-text">@{profile.handle}</h6>
                    <h6 className=" mt-3 ms-2 ">{profile.bio}</h6>
                </div>
                <div className="ms-2 mt-2 wd-greyed-text">
                   <span> <i className="fa-solid fa-location-dot fa-lg"/></span>
                    <span> {profile.location}  </span>
                    <span className="ms-2">  <i className="fa-solid fa-cake-candles fa-lg"/></span>
                    <span className="ms-1"> Born on {profile.dataOfBirth} </span>
                    <span className="ms-2"> <i className="fa-solid fa-calendar fa-lg"/> </span>
                    <span className="ms-1"> Joined {profile.dateJoined}  </span>
                </div>

                <div className="ms-2 mt-2 mb-lg-5">
                    <span className="fw-bolder ">{profile.followingCount}</span>
                    <span className=" wd-greyed-text" > Following </span>
                    <span> </span>
                    <span className="fw-bolder ms-2">  {profile.followersCount}</span>
                    <span className=" wd-greyed-text" > Followers</span>
                </div>
            </div>
    )
}
export default ProfileScreen;