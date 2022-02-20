import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "../../JS/actions/action";
import { deleteComment, editComment } from "../../JS/actions/comment";

import "./CommentCard.css";

const CommentCard = ({ comment }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.userReducer.user);
  const usersList = useSelector((state) => state.userReducer.usersList);

  const [edit, setEdit] = useState(false);
  const [newComment, setNewComment] = useState({ ...comment });

  const handelEnter = () => {
    dispatch(editComment(comment._id, newComment));
    setEdit(false);
  };

  return (
    <div className="commentCard">
      <div className="commentImg">
        <img
          src={
            usersList.find((user) => user._id === comment.userId)
              ? usersList.find((user) => user._id === comment.userId).imgLink
              : ""
          }
          alt="ProfileImg"
        />
      </div>
      <div className="commentCont">
        <h4 className="commentAuther">
          {usersList.map((user) => user._id === comment.userId && user.name)}
        </h4>

        {edit ? (
          <input
            type="text"
            name="Comment"
            value={newComment.comment}
            placeholder={comment.comment}
            className="form-control addtxt commentInput"
            id="editCommentInput"
            onChange={(e) =>
              setNewComment({ ...comment, comment: e.target.value })
            }
            onKeyPress={(e) => e.key === "Enter" && handelEnter()}
          />
        ) : (
          <h4>{comment.comment}</h4>
        )}
      </div>

      {edit === false && comment.userId === user._id && (
        <i
          id="fa-edit"
          className="fas fa-edit commentIcons"
          onClick={() => {
            setEdit(true);
          }}
        ></i>
      )}

      {(comment.userId === user._id || user.email === "admin@mayway.tn") && (
        <i
          className="fas fa-trash-alt commentIcons"
          onClick={() => dispatch(deleteComment(comment._id))}
        ></i>
      )}
    </div>
  );
};

export default CommentCard;
