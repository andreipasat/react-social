import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
            <StoreContext.Consumer>
                { (store) => {
                        let state = store.getState();
                        let addPost = () => {
                            store.dispatch(addPostActionCreator());
                        }

                        let postOnChange = (text) => {
                            store.dispatch(updateNewPostTextActionCreator(text));
                        }
                        return (
                            <MyPosts
                                updateNewPostText={postOnChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                            />
                        )
                    }
                }
            </StoreContext.Consumer>
        );
}

export default MyPostsContainer;