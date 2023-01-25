import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [postContent, setPostContent] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: postContent
        };
        console.log(newPost);
        props.addNewEntry(newPost);
    }

    return ( 
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" value={postContent} onChange={(event) => setPostContent(event.target.value)}/>
            <button type='submit'>CREATE</button>
        </form>
     );
}
 
export default CreatePostForm;