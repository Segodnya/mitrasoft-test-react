import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/actions";
import { ListGroup, Image, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import MySpinner from "./MySpinner";
import MyPagination from "./MyPagination";
import Comments from "./Comments";
import avatar from "../assets/avatar.png";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <>
      <div className="d-flex justify-content-start mb-3">
        <div>
          <input
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <CloseButton onClick={handleClear} />
        </div>
      </div>

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
                  <Image
                    src={avatar}
                    roundedCircle
                    alt="avatar"
                    style={{ cursor: "pointer", width: "48px", height: "48px" }}
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
