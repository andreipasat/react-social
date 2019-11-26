let renderEntireTree = () => {
    console.log('State changed')
}

let state = {
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
        ]
    }

}

window.state = state;

export const addPost = () => {
    let newPost = {
        id : 6,
        message : state.profilePage.newPostText,
        likes : 0
    };
    state.profilePage.newPostText = '';
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;