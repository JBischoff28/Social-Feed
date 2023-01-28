
const Post = (props) => {

    return ( 
        <div className="postContainer">
            <h2>{props.entry.name}</h2>
            <p>{props.entry.post}</p>
            <br />
            <hr />
        </div>
     );
}
 
export default Post;