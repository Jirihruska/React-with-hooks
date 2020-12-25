import React from 'react';
import '../css/Post.css';

 const Post = ({ text }) => {
    return (
        <div className="post">
            {text}
        </div>
    )
}

export default Post;