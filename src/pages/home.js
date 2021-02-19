import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "../components/container";

const HomePage = () => (
  <Container>
    <Jumbotron>
      <h1>Hello</h1>
      <p>This is my inteview assignment. Check it out!</p>
      <p>
        <Link to="/programs" className="btn btn-primary">
          Start!
        </Link>
      </p>
    </Jumbotron>
  </Container>
);

export default HomePage;
