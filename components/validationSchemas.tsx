import * as yup from 'yup';

export const loginSchema = yup.object({
    username: yup.string().min(3, 'O nome de usuário deve ter pelo menos 3 caracteres').max(100, 'O nome de usuário não pode exceder 100 caracteres').required('O nome de usuário é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').max(100, 'A senha não pode exceder 100 caracteres').required('A senha é obrigatória'),
})