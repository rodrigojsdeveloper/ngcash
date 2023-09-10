import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { IFormProps } from "../../interfaces";
import { CustomInput } from "../CustomInput";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import * as yup from "yup";

const Form = ({
  apiProp,
  historyProp,
  titleProp,
  textProp,
  linkProp,
  textLinkProp,
}: IFormProps) => {
  const navigate = useNavigate();

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    username: yup.string().min(3, ""),
    password: yup
      .string()
      .min(8, "")
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, ""),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSumbitFunction = (data: any) => {
    setLoad(true);

    api
      .post(`/${apiProp}`, data)
      .then((res) => {
        if (apiProp == "signin") {
          sessionStorage.setItem("NG.CASH: token", res.data.token);

          toast.success("Login completed");
        }

        if (apiProp == "users") {
          toast.success("Register completed");
        }

        navigate(`/${historyProp}`);
      })
      .catch((error) => {
        toast.error("Oops! An error occured");

        console.error(error);
      })
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <h2>{titleProp}</h2>

      <form onSubmit={handleSubmit(onSumbitFunction)}>
        <CustomInput
          type="text"
          label="Name"
          name="username"
          register={register}
        />
        <CustomInput
          type="password"
          label="Password"
          name="password"
          register={register}
        />

        <Button buttonStyle="register" type="submit" disabled={load}>
          {load ? "Sending..." : "Submit"}
        </Button>
      </form>

      <p>
        {textProp}
        <Link to={`/${linkProp}`}>{textLinkProp}</Link>
      </p>
    </Container>
  );
};

export { Form };
