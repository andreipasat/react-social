import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>;
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img src={profile.photos.large}/>
                    {profile.aboutMe}
                    <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        );
    }

    
}

export default ProfileInfo;