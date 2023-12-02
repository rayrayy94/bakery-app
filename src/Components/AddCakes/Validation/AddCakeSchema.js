import * as yup from 'yup';

export const AddCakeSchema = yup.object().shape({
    "cakeName" : yup.string().required('Enter Cake Name'),
    "cakeFlavor" : yup.string().required('Enter Cake Flavor'),
    "cakePrice" : yup.number().min(1).max(1000).required('Enter Cake Price'),
    "cakeType" : yup.string().required('Select One Option'),
    "file" : yup.mixed().required('Upload An Image')
});