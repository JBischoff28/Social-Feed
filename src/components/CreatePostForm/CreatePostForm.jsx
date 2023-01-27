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
        <form onSubmit={(event) => handleSubmit(event)} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input className='form-control' type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='group2'>
                <div  className='form-group'>
                    <label>Post</label>
                    <textarea className='form-control' type="text" placeholder='Click and drag the bottom right corner to adjust the textbox!' value={postContent} onChange={(event) => setPostContent(event.target.value)}/>
                </div>
            </div>
            <button className='btn btn-primary' type='submit'>CREATE</button>
        </form>
     );
}
 
export default CreatePostForm;