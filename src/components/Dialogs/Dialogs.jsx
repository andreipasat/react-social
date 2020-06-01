import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'message'} placeholder='Enter your message'
                validate={[required,maxLength50]}/>    
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    'form' : 'newMessage'
})(DialogsForm)

const Dialogs = (props) => {

    let dialogsData = props.dialogsPage.dialogs.map( (item) => {
            return <DialogItem name={item.name} id={item.id} key={item.id} />
        }
    );

    let messagesData = props.dialogsPage.messages.map( (message) => {
        return <Message message={message.message} key={message.id}/>
    } );

    const onSubmit = (formData) => {
        props.sendMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsData }
            </div>
            <div className={s.messages}>
                <div>{messagesData}</div>
                <div>
                    <DialogsReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;