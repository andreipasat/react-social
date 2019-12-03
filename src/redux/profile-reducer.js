const addpost = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id : 1, message : 'Hi my friend' , likes : 1},
        {id : 2, message : 'How are you?' , likes : 10},
        {id : 3, message : 'How are you2?' , likes : 12},
        {id : 4, message : 'How are you3?' , likes : 13},
    ],
    newPostText : 'new post text'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addpost : {
            let newPost = {
                id : 6,
                message : state.newPostText,
                likes : 0
            };
            state.newPostText = '';
            state.posts.push(newPost);
            return state;
        }
        case updatenewposttext : {
            state.newPostText = action.newPostText;
            return state;
        }
        default : {
            return state;
        }

    }



}

export const addPostActionCreator = () => ({ type : addpost });
export const updateNewPostTextActionCreator = (text) =>
    ({ type : updatenewposttext, newPostText : text});


export default profileReducer;