import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    'fullName': yup.string().required('Enter Your Name'),
    'email': yup.string().required('Enter Your Email'),
    'subject': yup.string().required('Enter A Subject'),
    'message': yup.string().min(25).required('Enter Your Message')
})