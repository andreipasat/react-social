import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYe4Erx36g6c_g5O6I9TPkKiF9JrRIffJPxGilG3EUVLP2f9U&s'></img>
            {props.message}
            <div>
                <span>like ({props.likes})</span>
            </div>
        </div>
    );
}

export default Post;