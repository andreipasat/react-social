import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const addpost = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';
const updatenewmessagebody = 'UPDATE-NEW-MESSAGE-BODY';
const sendmessage = 'SEND-MESSAGE';



let store = {
    _state : {
        profilePage : {
            posts : [
                {id : 1, message : 'Hi my friend' , likes : 1},
                {id : 2, message : 'How are you?' , likes : 10},
                {id : 3, message : 'How are you2?' , likes : 12},
                {id : 4, message : 'How are you3?' , likes : 13},
            ],
            newPostText : 'new post text'
        },
        dialogsPage : {
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
        },
        sidebar : {

        }

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type : 'add-post'}
        //change the state
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        //subscribe ui
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;