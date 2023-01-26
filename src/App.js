import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import PostList from './components/PostList/PostList';
import './App.css';


function App() {

  const [entries, setEntries] = useState([]);

  function AddNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
      <div className='row'>
        <NavBar />
      </div>
      <div>
        <CreatePostForm addNewEntry={AddNewPost} />
      </div>
      <div>
        <PostList appEntries={entries} />
      </div>

    </div>
  );
}

export default App;
