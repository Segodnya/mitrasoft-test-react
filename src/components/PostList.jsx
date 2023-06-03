import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest, fetchCommentsRequest } from "../redux/actions";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MySpinner from "./MySpinner";
import MyPagination from "./MyPagination";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);
  const comments = useSelector((state) => state.comments);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const toggleComments = (postId) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
    if (!comments[postId]?.data?.length) {
      dispatch(fetchCommentsRequest(postId));
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isLoading ? (
        <MySpinner />
      ) : (
        <>
          <ListGroup>
            {currentPosts.map((post) => (
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
          <MyPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </>
  );
};

export default PostList;
