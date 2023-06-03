import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest, fetchCommentsRequest } from "../redux/actions";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MySpinner from "./MySpinner";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    console.log("fetchPostsRequest action dispatched");
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const [showComments, setShowComments] = useState(false);

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
      {isLoading ? (
        <MySpinner />
      ) : (
        <ListGroup>
          {posts.map((post) => (
            <ListGroup.Item key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <Link to={`/users/${post.userId}`}>
                <img
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Button onClick={() => toggleComments(post.id)}>
                {showComments[post.id] ? "Close Comments" : "Show Comments"}
              </Button>
              {showComments[post.id] && (
                <div>
                  {comments[post.id]?.loading ? (
                    <MySpinner />
                  ) : comments[post.id]?.error ? (
                    <div>Error: {comments[post.id].error}</div>
                  ) : (
                    <>
                      <h6>Comments:</h6>
                      <ul>
                        {comments[post.id]?.data?.map((comment) => (
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
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default PostList;
