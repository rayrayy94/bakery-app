import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
    'firstName' : yup.string().required('Enter First Name'),
    'lastName' : yup.string().required('Enter Last Name'),
    'phoneNumber' : yup.string().required('Enter Phone Number'),
    'email' : yup.string().required('Enter Email'),
    'password' : yup.string().min(5).max(15).required('Enter Password'),
    'confirmPassword' : yup.string().min(5).max(15).required('Confirm Password'),
    'accountType' : yup.string().required('Select One Option'),
    'file' : yup.mixed().required('Upload An Image')
});