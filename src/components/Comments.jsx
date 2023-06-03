import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../redux/actions";
import { Button } from "react-bootstrap";
import MySpinner from "./MySpinner";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!comments[postId]?.data?.length) {
      dispatch(fetchCommentsRequest(postId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, postId]);

  const toggleComments = (postId) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
    if (!comments[postId]?.data?.length) {
      dispatch(fetchCommentsRequest(postId));
    }
  };

  return (
    <>
      <Button onClick={() => toggleComments(postId)}>
        {showComments[postId] ? "Close Comments" : "Show Comments"}
      </Button>
      {showComments[postId] && (
        <div>
          {comments[postId]?.loading ? (
            <MySpinner />
          ) : comments[postId]?.error ? (
            <div>Error: {comments[postId].error}</div>
          ) : (
            <>
              <h6>Comments:</h6>
              <ul>
                {comments[postId]?.data?.map((comment) => (
                  <li key={comment.id}>
                    <h3>{comment.email}</h3>
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Comments;
