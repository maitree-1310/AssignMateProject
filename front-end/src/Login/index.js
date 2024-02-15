import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import NavBar from "../NavBar";

const Login = () => {
  let errorMsg = "error!";

  return (
    
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="fs-4">Username</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Ian123@gmail.com"
                value="nothing"
                onChange={"nothing"}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="8" lg="6">
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="fs-4">Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Type in your password"
                value="temp"
                
              />
            </Form.Group>
          </Col>
        </Row>
        {errorMsg ? (
          <Row className="justify-content-center mb-4">
            <Col md="8" lg="6">
              <div className="" style={{ color: "red", fontWeight: "bold" }}>
                {errorMsg}
              </div>
            </Col>
          </Row>
        ) : (
          <></>
        )}
        <Row className="justify-content-center">
          <Col
            md="8"
            lg="6"
            className="mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between"
          >
            <Button
              id="submit"
              type="button"
              size="lg"
              onClick="nothing"
            >
              Login
            </Button>
            <Button
              variant="secondary"
              type="button"
              size="lg"
              onClick="nothing"
            >
              Exit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
