import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = props.dialogs.map( (item) => {
            return <DialogItem name={item.name} id={item.id}/>
        }
    );

    let messagesData = props.messages.map( (message) => {
        return <Message message={message.message}/>
    } );

    let newMessageBody = props.newMessageBody;

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