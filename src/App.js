import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';
import PostForm from './Components/CreatePostForm/CreatePostForm.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css';
// import CustomButton from "components/CustomButton/CustomButton";

function App() {

  const [entries, setEntries] = useState([{ userName: 'Fred', userPost: 'ipsum lorem' }, { userName: 'joe', userPost: 'ipsum lorem' }, { userName: 'tye', userPost: 'ipsum lorem' }])//setting the default value; future projects, will leave string empty for interactions with DB

  function addNewPost(entry) {
    let temporaryPosts = [...entries, entry]; //adds each new entry to the end of the array
    setEntries(temporaryPosts);
  }
  return (
    <div className='border-box'>
      <NavBar NavBar={NavBar} />
        <PostForm PostForm={PostForm} />
        {/* <PostList PostList={PostList} /> */}
       {/* <CustomButton message="Create" /> */}
        
    </div>

    // <div className='container-fluid'>
    //     <div className='col-md-6'>
    //       <div className='border-box'>
    //         <CreatePostForm addNewPost={addNewPost} />
    //       </div>
    //        <div className='border-box'>
    //          <PostList PostList={PostList} />
    //        </div>
    //      </div>
    //      <div className='col-md-6'>
    //        <div className='border-box'>
    // //         <Post Post={Post} />
    //      </div>
    //      </div>
    //    </div>
  );
}



export default App;

