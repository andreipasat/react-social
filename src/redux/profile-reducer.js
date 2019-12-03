const addpost = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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