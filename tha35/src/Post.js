import { Avatar, Button, Input } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React,{useEffect, useState} from "react";
import { db } from "./firebase";
import "./Post.css";
function Post({postId, user, imageURL, username, caption}) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  useEffect(()=>{
    if(postId){
      db.collection('posts').doc(postId).collection('comments').onSnapshot(snaphot => {
        setComments(snaphot.docs.map(doc => doc.data()));
      })
    }
  },[postId]);
  const postComment = (e) =>{
    e.preventDefault();
    db.collection('posts').doc(postId).collection('comments').add({
      comment: input,
      username: user.displayName
    })
    setInput("");
  }
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_header_left">
        <Avatar alt={username} src=""/>
        <h3>{username}</h3>
        </div>
        <div className="post_header_right">
        <MoreVert/>
        </div>
      </div>
      <img
        className="post_image"
        src={imageURL}
        alt=""
      />
      <p className="post_text">
        <strong>{username}: </strong>{caption}
      </p>

      {
        comments.map((comment) => (
          <p className="post_comment"><strong>{comment.username}: </strong>{comment.comment}</p>
        ))
      }
      {user &&
        <form className="post_comment_form">
        <input type="text" placeholder="Add a comment" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <Button type="submit" onClick={postComment} disabled={!input}>Comment</Button>
      </form>
      }
    </div>
  );
}

export default Post;
