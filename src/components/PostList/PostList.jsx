import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <ol style={{listStyle: 'none'}}>
            {props.appEntries.map((entry, index) => 
                (
                <div key={index}>
                    <Post entry={entry}/>
                </div>
                )
            )}
        </ol>
     );
}
 
export default PostList;