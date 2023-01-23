import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <ol style={{listStyle: 'none'}}>
            {props.appEntries.map((entry) => {
                return (
                    <li>
                        <Post />
                    </li>
                );
            })}
        </ol>
     );
}
 
export default PostList;