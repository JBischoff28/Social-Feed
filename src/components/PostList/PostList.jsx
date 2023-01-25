import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <ol style={{listStyle: 'none'}}>
            {props.appEntries.map((entry) => 
                (
                <div key={1}>
                    <Post entry={entry}/>
                </div>
                )
            )}
        </ol>
     );
}
 
export default PostList;