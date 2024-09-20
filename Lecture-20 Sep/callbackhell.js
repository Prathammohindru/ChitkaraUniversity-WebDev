// Example of callback hell

function getUserData(userId, callback) {
    setTimeout(() => {
      console.log("Fetched user data");
      callback({ userId: userId, username: "JohnDoe" });
    }, 1000);
  }
  
  function getUserPosts(username, callback) {
    setTimeout(() => {
      console.log(`Fetched posts for ${username}`);
      callback(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  }
  
  function getPostComments(post, callback) {
    setTimeout(() => {
      console.log(`Fetched comments for ${post}`);
      callback(["Comment 1", "Comment 2"]);
    }, 1000);
}