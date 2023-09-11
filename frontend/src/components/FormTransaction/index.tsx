import { TransactionContext } from "../../contexts/transaction.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { CustomInput } from "../CustomInput";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import { Button } from "../Button";
import * as yup from "yup";

const FormTransaction = () => {
  const { addTransactions } = useContext(TransactionContext);

  const token = sessionStorage.getItem("NG.CASH: token");

  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    username: yup.string().min(3, ""),
    value: yup.number().typeError(""),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSumbitFunction = (data: any) => {
    setLoad(true);

    api
      .post("transactions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        addTransactions(res.data);

        toast.success("Completed transaction");
      })
      .catch((error) => {
        toast.error("Transaction error");

        console.error(error);
      })
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
        <CustomInput
          type="text"
          label="Name"
          name="username"
          register={register}
        />

        <Button buttonStyle="register" type="submit" disabled={load}>
          {load ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Container>
  );
};

export { FormTransaction };
