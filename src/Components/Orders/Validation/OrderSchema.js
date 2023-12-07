import * as yup from 'yup';

export const OrderSchema = yup.object().shape({
    "userName": yup.string().required('Enter Your Full Name'),
    "userEmail": yup.string().required('Enter Your Email'),
    "address": yup.string().required('Enter Your Address'),
    "paymentType": yup.mixed().required('Please Select Your Payment Method'),

});
