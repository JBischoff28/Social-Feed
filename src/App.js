import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import PostList from './components/PostList/PostList';


function App() {

  const [entries, setEntries] = useState([]);

  function AddNewPost(enrty) {
    let tempEntries = [enrty, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div className="App">
      <NavBar />
      <CreatePostForm addNewEntry={AddNewPost} />
      <PostList appEntries={entries} />
    </div>
  );
}

export default App;
