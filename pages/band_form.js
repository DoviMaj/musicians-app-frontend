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
    if (!data) return;
    try {
      const req = await fetch(
        `http://${process.env.NEXT_PUBLIC_BACKEND}/api/bands`,
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
        description: "",
        image: "",
      });

      router.push(`/bands/${res.band_id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form className={styles.form}>
        <h1>Band Registration</h1>

        <FormGroup>
          <Label htmlFor="name">Band Name:</Label>
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
          <Label htmlFor="description">Description:</Label>
          <Input
            {...register("description", {
              required: "Required",
            })}
            type="text"
            id="description"
            name="description"
          ></Input>{" "}
          {errors.description && <FormText>description is required</FormText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="image">Logo url:</Label>
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
