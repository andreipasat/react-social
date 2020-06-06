import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    {props.profile.aboutMe}
                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        );
    }

    
}

export default ProfileInfo;