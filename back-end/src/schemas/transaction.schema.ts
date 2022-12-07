import { ITransactionRequest } from '../interfaces/transactions'
import { SchemaOf } from 'yup'
import * as yup from 'yup'


const transactionSchema: SchemaOf<ITransactionRequest> = yup.object().shape({

    username: yup
        .string()
        .required('Username required')
        .min(3, 'Username must contain at least 3 characters'),
    value: yup
        .number()
        .required('Value required')
        .typeError('Amount must be a number'),
})

export { transactionSchema }
