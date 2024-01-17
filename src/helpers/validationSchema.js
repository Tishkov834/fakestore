import * as Yup from 'yup';

export const createUserValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Username is required')
    .min(2, 'Username should contain at least 2 characters')
    .max(60, 'Username should contain at most 60 characters'),
  email: Yup.string()
    .required('Email is required')
    .min(2, 'Email should contain at least 2 characters')
    .max(100, 'Email should contain at most 100 characters')
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      'User email, must be a valid email',
    ),
});
