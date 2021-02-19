import React from "react";
import { Container as BSContainer, Alert } from "react-bootstrap";
import Loading from "./loading";

const Container = ({ children, isLoading, error, title }) => (
  <BSContainer className="mt-4">
    {title && <h1>{title}</h1>}
    {error && <Alert variant="danger">{error}</Alert>}
    <Loading isLoading={isLoading} />
    {children}
  </BSContainer>
);

export default Container;
