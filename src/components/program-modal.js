import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, FormGroup } from "react-bootstrap";
import AttendeeList from "./attendee-list";
import useApi from "../hooks/useApi";

const ProgramModal = ({ program, onChange }) => {
  const [show, setShow] = useState(false);
  const residentsApi = useApi("residents", false);
  const { data } = residentsApi;
  const programsApi = useApi(`programs/${program.id}/attend`, false);
  const handleAdd = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    const residentId = form.residentId.value;
    const status = form.status.value;
    await programsApi.post({ residentId, status });
    onChange(residentId);
  };
  const handleShow = async (show) => {
    if (show) {
      await residentsApi.get();
    }
    setShow(show);
  };

  return (
    <>
      <Button onClick={() => handleShow(true)}>View Attendees</Button>
      <Modal show={show} onHide={() => handleShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{program.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <FormGroup className="mb-2">
              <Form.Label>Resident</Form.Label>
              <Form.Control as="select" name="residentId">
                {data &&
                  data.map((resident) => (
                    <option key={resident.id} value={resident.id}>
                      {resident.name}
                    </option>
                  ))}
              </Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" name="status">
                <option value="Active">Active</option>
                <option value="Passive">Passive</option>
              </Form.Control>
            </FormGroup>
            <Row>
              <Col xs={12} className="text-right mt-2">
                <Button type="submit">Add</Button>
              </Col>
            </Row>
          </Form>

          <AttendeeList
            program={program}
            attendees={program.attendance.map((attendee) => {
              const resident = (data || []).find(
                (r) => r.id === attendee.residentId
              );
              return { ...attendee, resident };
            })}
            onAdd={() => onChange()}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProgramModal;
