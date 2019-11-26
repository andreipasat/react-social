import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = props.state.dialogs.map( (item) => {
            return <DialogItem name={item.name} id={item.id}/>
        }
    );

    let messagesData = props.state.messages.map( (message) => {
        return <Message message={message.message}/>
    } );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsData }
            </div>
            <div className={s.messages}>
                { messagesData }
            </div>
        </div>
    );
}

export default Dialogs;