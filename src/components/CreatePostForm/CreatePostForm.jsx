import React, { useState, useEffect } from 'react';

const CreatePostForm = (props) => {
    return ( 
        <form>
            <label>Name</label>
            <input type="text" />
            <label>Post</label>
            <input type="text" />
        </form>
     );
}
 
export default CreatePostForm;