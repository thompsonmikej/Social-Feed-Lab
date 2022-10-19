import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx'
// import PostList from './Components/PostList/PostList.jsx';
import Post from './Components/Post/Post.jsx';
// import './App.css';
// import './styles.css';
// import CustomButton from "components/CustomButton/CustomButton";

function App() {

  const [entries, setEntries] = useState([{ userName: 'Fred', userPost: 'ipsum lorem' }, { userName: 'joe', userPost: 'ipsum lorem' }, { userName: 'tye', userPost: 'ipsum lorem' }])//setting the default value; future projects, will leave string empty for interactions with DB

function addNewPost(entry) {
    let temporaryPosts = [...entries, entry]; //adds each new entry to the end of the array
    setEntries(temporaryPosts);
  }
  return (
    <div>
        <CreatePostForm addNewPost={addNewPost} />
    </div>
  );
}

function runPosts(entry) {
  return (
    <div>
      <Post Post={Post} />
    </div>
  );
}
    // <PostList />

export default App;


// // function App() {
  // for the large blue button
//   return (
//     <div className="App">
//       <CustomButton message="Create" />
//     </div>
//   );
// }
// export default App;