import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    email: Yup.string().email('The email is incorrect').required('Enter email address'),
    num: Yup.string().nullable(),
  });
  