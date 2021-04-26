import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "../styles/Form.module.scss";

const musician_form = () => {
  return (
    <Container>
      <Form className={styles.form}>
        <h1>Musician Registration</h1>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" required id="name" name="name"></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="instrument">Instrument:</Label>
          <Input
            type="text"
            required
            id="instrument"
            name="instrument"
          ></Input>{" "}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date-of-birth">Date of birth:</Label>
          <Input
            max={new Date().toISOString().split("T")[0]}
            type="date"
            required
            id="date-of-birth"
            name="date-of-birth"
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="image">Profile Image:</Label>
          <Input type="file" required></Input>
        </FormGroup>

        <Button style={{ width: "100%" }} color="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default musician_form;
