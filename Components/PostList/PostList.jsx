// // Within the PostList component, create the feed where all your posts will be displayed in your app.All posts should be passed into this component using props.Then, utilize the “map” higher order array method to map each post to its own Post component.

// const PostList = (props) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Entry Number</th>
//                     <th>Name</th>
//                     <th>Post</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.parentEntries.map((entry, index) => {
//                     return (
//                         <form action="/action_page.php">
//                             <label for="fname">First name:</label><br>
//                                 <input type="text" id="fname" name="fname" value="John"><br>
//                                     <label for="lname">Last name:</label><br>
//                                         <input type="text" id="lname" name="lname" value="Doe"><br><br>
//                                             <input type="submit" value="Submit">
//                                             </form> 
//                     )
//                 })}
//             </tbody>
//         </table>
//     );
// }

// export default PostList;