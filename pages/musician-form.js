import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.scss";

const musician_form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.image);
  };

  return (
    <Container>
      <Form className={styles.form}>
        <h1>Musician Registration</h1>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            {...register("name", {
              required: "Required",
            })}
            type="text"
            id="name"
            name="name"
          ></Input>{" "}
          {errors.name && <FormText>Name is required</FormText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="instrument">Instrument:</Label>
          <Input
            {...register("instrument", {
              required: "Required",
            })}
            type="text"
            id="instrument"
            name="instrument"
          ></Input>{" "}
          {errors.instrument && <FormText>Instrument is required</FormText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date_of_birth">Date of birth:</Label>
          <Input
            {...register("date_of_birth", {
              required: "Required",
            })}
            max={new Date().toISOString().split("T")[0]}
            type="date"
            id="date_of_birth"
            name="date_of_birth"
          ></Input>{" "}
          {errors.date_of_birth && (
            <FormText>Date of birth is required</FormText>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="image">Profile Image:</Label>
          <Input
            {...register("image", {
              required: "Required",
            })}
            type="file"
          ></Input>{" "}
          {errors.image && <FormText>Image is required</FormText>}
        </FormGroup>

        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          style={{ width: "100%" }}
          color="primary"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default musician_form;
