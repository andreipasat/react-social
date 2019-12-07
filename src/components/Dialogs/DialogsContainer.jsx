import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                    let state = store.getState();
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    let onNewMessageBody = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    return (
                        <Dialogs
                            newMessageBody={state.dialogsPage.newMessageBody}
                            sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageBody}
                            dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>
                    );
                }
            }
        </StoreContext.Consumer>

    );
}

export default DialogsContainer;