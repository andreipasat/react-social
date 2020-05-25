import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    {props.profile.aboutMe}
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        );
    }

    
}

export default ProfileInfo;