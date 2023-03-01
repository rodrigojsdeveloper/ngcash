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
  buttonStyle: "register" | "home";
}

export interface InputProps {
  type?: string;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean | undefined;
  onChange?: React.FormEventHandler<HTMLImageElement>;
}

export interface IStyledButtonProps {
  buttonStyle: "register" | "home";
}

export interface ITransactionsProps {
  transactions: ITransactionProps[];
}

export interface IFormTransactionProps {
  addTransactions: (e: ITransactionProps) => void;
}

export interface ITransactionComponentProps {
  transaction: ITransactionProps;
}
