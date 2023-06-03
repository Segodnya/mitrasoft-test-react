import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/actions";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import MySpinner from "./MySpinner";
import MyPagination from "./MyPagination";
import Comments from "./Comments";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

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
                <Comments postId={post.id} />
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
