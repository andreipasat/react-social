import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    } else {
        return (
            <div>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={s.descriptionBlock}>
                    {props.profile.aboutMe}
                </div>
            </div>
        );
    }

    
}

export default ProfileInfo;