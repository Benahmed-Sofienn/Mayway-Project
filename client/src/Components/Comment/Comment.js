import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment,getComments } from "../../JS/actions/comment";
import CommentCard from "../CommentCard/CommentCard";

import "./Comment.css";

const Comment = ({ transId }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();


  useEffect(() => {
 
    dispatch(getComments())
 },[dispatch]);


  const commentsList = useSelector(
    (state) => state.commentReducer.commentsList
  );
  const [newComment, setNewComment] = useState({});

  return (
    <div className="CommentsList">
      <div className="newComment">
      <input
        type="text"
        name="Comment"
        placeholder="Add a new comment..."
        className="form-control addtxt commentInput"
        onChange={(e) =>
          setNewComment({
            transportId: transId,
            userId: user._id,
            comment: e.target.value,
          })
        }
      />
      <button className="commentBtn" onClick={() => dispatch(addComment(newComment))}>Comment</button>
      </div>
      {commentsList.map(comment=>comment.transportId=== transId && <CommentCard  comment={comment} key={comment.id}/>)}
    </div>
  );
};

export default Comment;
