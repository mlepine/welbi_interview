import React from "react";
import { ListGroup } from "react-bootstrap";

const AttendeeList = ({ attendees }) => {
  return (
    <>
      <h5>Attendees</h5>
      <ListGroup>
        {attendees &&
          attendees.map(({ residentId, resident, status }) => {
            return (
              <ListGroup.Item key={residentId}>
                {resident ? resident.name : "Not Found"} ({status})
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </>
  );
};

export default AttendeeList;
