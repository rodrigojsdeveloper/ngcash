import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'


export interface ITransactionProp {
    id: string
    value: number
    createdAt: string
}

export interface IAccountProp {
    id: string
    value: number
    createdAt: string
    creditedTransaction: ITransactionProp[]
    debitedTransaction: ITransactionProp[]
}

export interface IUserProp {
    id: string
    username: string
    password: string
    accountId: IAccountProp
}

export interface IFormProps {
    apiProp: string,
    historyProp: string
    titleProp: string
    textProp: string
    linkProp: string
    authentication: boolean
    setAuthentication: Dispatch<SetStateAction<boolean>>
}

export interface IButtonProps {
    children: React.ReactNode
    onClick?: MouseEventHandler
    disabled?: boolean | undefined
    type?: 'button' | 'submit' | 'reset' | undefined
    buttonStyle: 'register' | 'home'
}

export interface InputProps {
    type?: string
    name: string
    autoComplete?: string
    placeholder?: string
    register: UseFormRegister<FieldValues>
    label?: string
    error?: any
    required?: boolean | undefined
}

export interface IStyledButtonProps {
    buttonStyle: 'register' | 'home'
}

export interface ISession {
    authentication: boolean
    setAuthentication: Dispatch<SetStateAction<boolean>>
}

export interface IHome {
    setAuthentication: Dispatch<SetStateAction<boolean>>
}

export interface ITransactions {
    transactions: ITransactionProp[]
}

export interface IFormTransaction {
    addTransactions: (e: ITransactionProp) => void
}
