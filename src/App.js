import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';
import PostForm from './Components/CreatePostForm/CreatePostForm.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css';


function App() {

  const [entries, setEntries] = useState([{ userName: 'David Lagrange', userPost: 'I love playing guitar. Does anyone want to play with me?' }, { userName: 'JJ Vega', userPost: 'Its April Fools Day! Give this a dislike if you really like it. :)' }, {
    userName: 'Nevin Seibel', userPost: "My Rubik's cube is fully charged and ready for battle.Right after I eat my meal that has appeared from the magical hand from behind my curtain." }])//setting the default value; future projects, will leave string empty for interactions with DB

  function addNewPost(entry) {
    let temporaryPosts = [...entries, entry]; //adds each new entry to the end of the array
    setEntries(temporaryPosts);
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
              <NavBar />
           </div>
          <div className='border-box'>
      <PostForm addNewPostProperty={addNewPost} /> {/* akin to AddNewEntry  */}
          </div>
        </div>     
      <div className='col-md-6'>
        <div className='border-box'>
      <PostList parentList={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;