import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let postsData = props.posts.map( (post) => {
        return <Post message={post.message} likes={post.likes} key={post.id} />
    } );

    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={postOnChange} ref={ newPostElement } value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>New Post</button>
            </div>
            <div className={s.posts}>
                { postsData }
            </div>
        </div>
    );
}

export default MyPosts;