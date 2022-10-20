// Within the CreatePostForm component create a form with 2 input fields.There should be an input field for the user’s name, as well as the body of their post, and each should be bound to its own state variable.

import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CreatePostForm.css';

const PostForm = (props) => {
// hooks
    const [userName, setUserName] = useState('First name and Last name here');
    const [userPost, setUserPost] = useState('Write your post here');

    function handleSubmit(postEvent) {
        postEvent.preventDefault();
        let newPost = {
            userName: userName,
            userPost: userPost
        } //new JS object
        console.log(newPost);
        //what is props.addNewPost and what does it do with this newPost object created here^^
        //what review question is this illustrating?  
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' onChange={(event) => setUserName(event.target.value)} value={userName} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='text' className='form-control'  onChange={(event) => setUserPost(event.target.value)} value={userPost} />
            </div>
            <div>
                <button type='submit' className='create btn btn-primary'>Create
                    <CustomButton />
                </button>
            </div>
        </form>
    );
}

export default PostForm;
