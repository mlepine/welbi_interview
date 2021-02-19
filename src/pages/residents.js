import React from "react";
import { Row, Col } from "react-bootstrap";
import useApi from "../hooks/useApi";
import Container from "../components/container";

const ResidentsPage = () => {
  const residentsApi = useApi("residents");
  const { isLoading, data, error } = residentsApi;

  return (
    <Container title="Residents" isLoading={isLoading} error={error}>
      <Row>
        {data &&
          data.map((resident) => (
            <Col key={resident.id} xs={12} className="h-100 m-2">
              {resident.name}
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ResidentsPage;
