import React from 'react'
import s from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, saveProfile}) => {

    const onSubmit = (formData) => {
        saveProfile(formData)
    }

    return <div>
        <ProfileDataFormRedux onSubmit={onSubmit} initialValues={profile} profile={profile} />
    </div>
}

const ProfileDataFormFields = ({handleSubmit, error, profile}) => {

    return <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            <div className={s.profileData}>
                Fullname : <Field component={Input} name={'fullName'} validate={[required]}/>
                About me : <Field component={Input} name={'aboutMe'} validate={[required]}/>
                My skills : <Field component={Input} name={'lookingForAJobDescription'} validate={[required]}/>
            </div>
            <div className={s.contactsBlock}>
                { Object.keys(profile.contacts).map(key => {
                    return <div key={key}>{key} : <Field component={Input} name={'contacts.' + key} /></div>
                }) }
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
        </form>
}

const ProfileDataFormRedux = reduxForm({
    form : 'profile'
}) (ProfileDataFormFields)

export default ProfileDataForm