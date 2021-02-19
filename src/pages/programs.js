import React from "react";
import { Row, Col } from "react-bootstrap";
import useApi from "../hooks/useApi";
import Container from "../components/container";
import ProgramCard from "../components/program-card";

const ProgramsPage = () => {
  const programsApi = useApi("programs");
  const { isLoading, data, error, refresh } = programsApi;

  return (
    <Container title="Programs" isLoading={isLoading} error={error}>
      <Row>
        {data &&
          data.map((program) => (
            <Col key={program.id} xs={12} lg={6} className="mb-4">
              <ProgramCard program={program} onChange={() => refresh()} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProgramsPage;
