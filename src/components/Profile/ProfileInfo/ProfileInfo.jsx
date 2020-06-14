import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/user_icon.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {

            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner && <div><input type='file' name='avatar' onChange={onMainPhotoSelected}/></div>}
                {profile.aboutMe}
                <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );

    
}

export default ProfileInfo;