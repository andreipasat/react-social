const updatenewmessagebody = 'UPDATE-NEW-MESSAGE-BODY';
const sendmessage = 'SEND-MESSAGE';

let initialState = {
    dialogs : [
        {id : 1, name : 'Dimich'},
        {id : 2, name : 'Andrei'},
        {id : 3, name : 'Chistol'},
        {id : 4, name : 'Musteata'},
        {id : 5, name : 'Bahore'},
    ],
    messages : [
        {id : 1, message : 'Text1'},
        {id : 2, message : 'Text2'},
        {id : 3, message : 'Text3'},
        {id : 4, message : 'Text4'},
        {id : 5, message : 'Text5'},
    ],
    newMessageBody : ''
}

const dialogsReducer = (state = initialState, action) => {

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