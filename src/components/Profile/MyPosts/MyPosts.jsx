import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {required,maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {

    let onAddPost = (formData) => {
        props.addPost(formData.newPost);
    }

    let postsData = [...props.posts]
    .reverse()
    .map( (post) => {
        return <Post message={post.message} likes={post.likes} key={post.id} />
    } );

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                { postsData }
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPost'} component={Textarea} placeholder={'New post'} 
                validate={[required,maxLength10]} />
            </div>
            <div>
                <button>New Post</button>
            </div>

        </form>
    )
}

const AddPostFormRedux = reduxForm({form : 'addNewPost'})(AddPostForm)

export default MyPosts;