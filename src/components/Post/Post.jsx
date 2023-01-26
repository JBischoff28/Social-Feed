
const Post = (props) => {
    return ( 
        <div className="">
            <h2>{props.entry.name}</h2>
            <p>{props.entry.post}</p>
        </div>
     );
}
 
export default Post;