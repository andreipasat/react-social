import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/user_icon.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
    }
    const saveProfileLocal = (data) => {
        saveProfile(data).then(() => {
            setEditMode(false)
        })

    }

    return (
        <div>
            <div className={s.statusBlock}>
                <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner && <div><input type='file' name='avatar' onChange={onMainPhotoSelected}/></div>}
            </div>
            {editMode
                ? <ProfileDataForm profile={profile} saveProfile={saveProfileLocal}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode} />
            }

        </div>
    );

    
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.descriptionBlock}>

        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

        <div className={s.profileData}>
            <div>Full name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>My skills: {profile.lookingForAJobDescription}</div>
        </div>
        <div className={s.contactsBlock}>
            { Object.keys(profile.contacts).map(key => {
                return <ContactsList key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            }) }
        </div>
    </div>
}

const ContactsList = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle} : </b> {contactValue}
    </div>
}

export default ProfileInfo;