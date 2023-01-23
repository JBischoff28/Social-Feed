import React, { useState } from 'react';


const Post = (props) => {
    return ( 
        <table>
            <tr>
                <td>{props.name}</td>
                <td>{props.post}</td>
            </tr>
        </table>
     );
}
 
export default Post;