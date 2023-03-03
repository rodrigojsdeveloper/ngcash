import { IFormTransactionProps } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "../CustomInput";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import * as yup from "yup";

const FormTransaction = ({ addTransactions }: IFormTransactionProps) => {
  const [load, setLoad] = useState<boolean>(false);

  const token = sessionStorage.getItem("Project NG.CASH: token");

  const schema = yup.object().shape({
    username: yup.string().min(3, ""),
    value: yup.number().typeError(""),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSumbitFunction = (data: object) => {
    setLoad(true);

    api
      .post("/transactions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        addTransactions(res.data);

        toast.success("Completed transaction");
      })
      .catch(() => toast.error("Transaction error"))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <h2>Transaction</h2>

      <form onSubmit={handleSubmit(onSumbitFunction)}>
        <CustomInput
          type="text"
          label="Value"
          name="value"
          register={register}
        />
        <CustomInput type="text" label="Name" name="name" register={register} />

        <Button buttonStyle="register" type="submit" disabled={load}>
          {load ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Container>
  );
};

export { FormTransaction };
