import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    // debugger;

    let dialogsData = props.dialogsPage.dialogs.map( (item) => {
            return <DialogItem name={item.name} id={item.id} key={item.id} />
        }
    );

    let messagesData = props.dialogsPage.messages.map( (message) => {
        return <Message message={message.message} key={message.id}/>
    } );

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsData }
            </div>
            <div className={s.messages}>
                <div>{messagesData}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;