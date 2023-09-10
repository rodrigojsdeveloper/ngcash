import { UseFormRegister, FieldValues } from "react-hook-form";
import React, { MouseEventHandler } from "react";

export interface ITransactionProps {
  id: string;
  value: number;
  createdAt: string;
}

export interface IAccountProps {
  id: string;
  value: number;
  createdAt: string;
  creditedTransaction: ITransactionProps[];
  debitedTransaction: ITransactionProps[];
}

export interface IUserProps {
  id: string;
  username: string;
  password: string;
  accountId: IAccountProps;
}

export interface IFormProps {
  apiProp: string;
  historyProp: string;
  titleProp: string;
  textProp: string;
  linkProp: string;
  textLinkProp: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  disabled?: boolean | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  buttonStyle: "register" | "dashboard";
}

export interface InputProps {
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

export interface IStyledButtonProps {
  buttonStyle: "register" | "dashboard";
}

export interface ITransactionsProps {
  transactions: ITransactionProps[];
}

export interface ITransactionComponentProps {
  transaction: ITransactionProps;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ITransactionContextData {
  transactions: Array<ITransactionProps>;
  setTransactions: React.Dispatch<React.SetStateAction<ITransactionProps[]>>;
  transactionsCashIn: Array<ITransactionProps>;
  setTransactionsCashIn: React.Dispatch<
    React.SetStateAction<ITransactionProps[]>
  >;
  transactionsCashOut: Array<ITransactionProps>;
  setTransactionsCashOut: React.Dispatch<
    React.SetStateAction<ITransactionProps[]>
  >;
  transactionsDate: Array<ITransactionProps>;
  setTransactionsDate: React.Dispatch<
    React.SetStateAction<ITransactionProps[]>
  >;
  transactionsBoolean: boolean;
  setTransactionsBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  transactionsCashInBoolean: boolean;
  setTransactionsCashInBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  transactionsCashOutBoolean: boolean;
  setTransactionsCashOutBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  transactionsDateBoolean: boolean;
  setTransactionsDateBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  addTransactions: (transaction: ITransactionProps) => void;
  token: string | null;
}
