import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = ({status,profile,updateStatus, isOwner, savePhoto}) => {
    return (
        <div>
            <ProfileInfo
                status={status}
                profile={profile}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile