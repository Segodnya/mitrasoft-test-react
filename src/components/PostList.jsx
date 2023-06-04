import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/actions";
import Search from "./Search";
import { ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import MySpinner from "./MySpinner";
import MyPagination from "./MyPagination";
import Comments from "./Comments";
import avatar from "../assets/avatar.png";
import Sort from "./Sort";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("id");

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />

      <Sort sortOption={sortOption} setSortOption={setSortOption} />

      {isLoading ? (
        <MySpinner />
      ) : (
        <>
          <ListGroup>
            {posts
              .filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              // eslint-disable-next-line array-callback-return
              .sort((a, b) => {
                if (sortOption === "id") {
                  return a.id - b.id;
                } else if (sortOption === "title") {
                  return a.title.localeCompare(b.title);
                }
              })
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((post) => (
                <ListGroup.Item key={post.id}>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                  <Link to={`/users/${post.userId}`}>
                    <Image
                      src={avatar}
                      roundedCircle
                      alt="avatar"
                      style={{
                        cursor: "pointer",
                        width: "48px",
                        height: "48px",
                      }}
                    />
                  </Link>
                  <Comments postId={post.id} />
                </ListGroup.Item>
              ))}
          </ListGroup>
          <MyPagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              posts.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
              ).length / postsPerPage
            )}
            onPageChange={onPageChange}
          />
        </>
      )}
    </>
  );
};

export default PostList;
