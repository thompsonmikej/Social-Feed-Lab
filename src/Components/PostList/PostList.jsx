// Within the PostList component, create the feed where all your posts will be displayed in your app.All posts should be passed into this component using props.Then, utilize the “map” higher order array method to map each post to its own Post component.
import Post from "../Post/Post.jsx";

const PostList = (props) => {
    return (               
        <Post indexNumber={props.index} userIs={props.userName} userSaid={props.userPost} />
    );
 }
export default PostList;