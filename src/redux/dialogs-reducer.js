const updatenewmessagebody = 'UPDATE-NEW-MESSAGE-BODY';
const sendmessage = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case updatenewmessagebody : {
            state.newMessageBody = action.body;
            return state;
        }
        case  sendmessage : {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id : 5, message : body});
            return state;
        }
        default : {
            return state;
        }
    }

}

export const sendMessageCreator = () => ({ type : sendmessage});
export const updateNewMessageBodyCreator = (body) =>
    ({ type : updatenewmessagebody, body: body})


export default dialogsReducer;