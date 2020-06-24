import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = ({status,profile,updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo
                status={status}
                profile={profile}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile