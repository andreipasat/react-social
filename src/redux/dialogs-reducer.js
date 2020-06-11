const SEND_MESSAGE = 'social_network/dialogs/SEND_MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SEND_MESSAGE : {
            let body = action.message;
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id : 5, message : body});
            return stateCopy;
        }
        default : {
            return state;
        }
    }

}

export const sendMessageCreator = (message) => ({ type : SEND_MESSAGE, message})

export default dialogsReducer;