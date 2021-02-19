import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import moment from "moment";
import ProgramModal from "./program-modal";

const ProgramCard = ({ program, onChange }) => (
  <Card className="h-100">
    <Card.Body>
      <Card.Title>
        <h5 className="mb-1">{program.name}</h5>
        <small className="text-muted">{program.dimension}</small>
      </Card.Title>
      <Row>
        <Col className="text-muted" xs={3}>
          Date
        </Col>
        <Col>{moment(program.start).format("dddd, MMM Do")}</Col>
      </Row>
      <Row>
        <Col className="text-muted" xs={3}>
          Time
        </Col>
        <Col>
          {" "}
          {moment(program.start).format("h:mm a")} (
          {moment(program.end).from(program.start, true)})
        </Col>
      </Row>
      <Row>
        <Col className="text-muted" xs={3}>
          Location
        </Col>
        <Col>{program.location}</Col>
      </Row>
      <Row>
        <Col xs="12">
          {program.hobbies.map((h) => (
            <Badge variant="primary" className="mr-2">
              {h}
            </Badge>
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="text-right mt-2">
          <ProgramModal program={program} onChange={onChange} />
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default ProgramCard;
