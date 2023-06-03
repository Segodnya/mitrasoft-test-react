import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/actions";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    console.log("fetchPostsRequest action dispatched");
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
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
              <Button onClick={toggleComments}>
                {showComments ? "Hide Comments" : "Show Comments"}
              </Button>
              {showComments && (
                <div>
                  <h6>Comments:</h6>
                  <ul>
                    {post.comments.map((comment) => (
                      <li key={comment.id}>{comment.body}</li>
                    ))}
                  </ul>
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
