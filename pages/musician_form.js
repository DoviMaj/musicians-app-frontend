import React from "react";
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
import { useRouter } from "next/router";
import styles from "../styles/Form.module.scss";

const musician_form = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const req = await fetch(
        `http://${process.env.NEXT_PUBLIC_BACKEND}/api/musician`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const res = await req.json();
      reset({
        name: "",
        instrument: "",
        image_url: "",
        date_of_birth: "",
      });
      router.push(`/musicians/${res.musician_id}`);
      console.log(req);
    } catch (err) {
      console.log(err);
    }
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
          <Label htmlFor="image_url">Profile Image Url:</Label>
          <Input
            {...register("image_url", {
              required: true,
              pattern: {
                value: /\.(jpeg|jpg|gif|png)$/,
                message: "invalid image, must end with jpeg, jpg, gif or png",
              },
            })}
            type="text"
          ></Input>{" "}
          {errors.image_url && <FormText>{errors.image_url.message}</FormText>}
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
