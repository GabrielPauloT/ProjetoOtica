
import * as yup from 'yup'

export const ValidationSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required('O e-mail não pode ser vazio')
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .max(100, 'As senhas não coincidem'),
})
