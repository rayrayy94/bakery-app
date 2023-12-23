import * as yup from 'yup';

export const SigninSchema = yup.object().shape({
    'email': yup.string().required('Enter Email'),
    'password': yup.string().required('Enter Password')
});