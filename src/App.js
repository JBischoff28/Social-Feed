import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import PostList from './components/PostList/PostList';
import './App.css';


function App() {

  const [entries, setEntries] = useState([{name: 'Admin', post: 'Begin posting your entries today! This is a default post to welcome our new users! I hope that you enjoy this app :)'}]);

  function AddNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
      <div className='row'>
        <NavBar />
      </div>
      <div className='d-flex flex-column'>
        <div className='border-box'>
          <CreatePostForm addNewEntry={AddNewPost} />
        </div>
        <div className='border-box'>
          <PostList appEntries={entries}/>
        </div>
      </div>
    </div>
  );
}

export default App;
