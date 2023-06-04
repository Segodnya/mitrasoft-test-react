import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import avatar from "../assets/avatar.png";

const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleBack}>
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
    </div>
  );
};

export default UserProfile;
