import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import MySpinner from "./MySpinner";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.loading);

  const handleBack = () => {
    navigate("/mitrasoft-test-react");
  };

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <MySpinner />
      ) : (
        <>
          <Button variant="outline-primary" onClick={handleBack}>
            Back
          </Button>
          <Card>
            <Card.Img
              variant="top"
              src={avatar}
              style={{ width: "96px", height: "96px" }}
            />
            <Card.Title>User Profile</Card.Title>
            <Card.Text>{`User ID: ${userId}`}</Card.Text>
          </Card>

          <ListGroup>
            {posts
              .filter((post) => post.userId === parseInt(userId))
              .map((post) => (
                <ListGroup.Item key={post.id}>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </>
      )}
    </div>
  );
};

export default UserProfile;
