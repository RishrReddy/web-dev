import React from "react";
import EditProfileScreen from "./EditProfileScreen";
import profile from "../data/profile.json"

const EditProfile = () => {
    return(
        <div>
            {
                profile.map(profile => {
                    return(
                        <EditProfileScreen profile={profile} key={profile._id}/>
                    )
                })
            }
        </div>
    )
}

export default EditProfile;