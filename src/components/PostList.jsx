import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/actions";
import { ListGroup } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <ListGroup>
      {posts.map((post) => (
        <ListGroup.Item key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostList;
