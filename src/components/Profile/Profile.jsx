import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = ({status,profile,updateStatus}) => {
    return (
        <div>
            <ProfileInfo status={status} profile={profile} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile