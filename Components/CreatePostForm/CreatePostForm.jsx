// Within the CreatePostForm component create a form with 2 input fields.There should be an input field for the user’s name, as well as the body of their post, and each should be bound to its own state variable.

import React, { useState } from 'react';
import './CreatePostForm.css';

const Post = (props) => {

    const [userName, setUserName] = useState('JoKey');
    const [userPost, setUserPost] = useState('ipZZum lorem');

    function handleSubmit(postEvent) {
        postEvent.preventDefault();
        let newPost = {
            userName: userName,
            userPost: userPost
        }
        console.log(newPost);
        props.addNewPost(newPost)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='text' className='form-control' value={userPost} onChange={(event) => setUserPost(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary' style={{ 'margin-top': '1em' }}>Create</button>
        </form>
    );
}

export default Post;
