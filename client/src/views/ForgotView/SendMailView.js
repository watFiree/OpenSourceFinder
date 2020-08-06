import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import Input from '../../components/atoms/Input';
import Title from '../../components/atoms/Title';
import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';

const SendMailView = ({ history }) => (
  <>
    <Title size="1.8rem">Recover password</Title>
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setStatus, resetForm }) => {
        axios
          .post('/user/forgotMail', values)
          .then(() => history.push('/'))
          .catch((err) => {
            resetForm();
            setStatus(err.response.data.message);
          });
      }}
    >
      {({ values, errors, status, touched, handleSubmit, handleBlur, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            fullWidth
            id="email"
            title="email"
            autoComplete="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {status && !errors.email ? <ErrorMessage>{status}</ErrorMessage> : null}
          {errors.email && touched.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
          <Button bg="purpleDark" type="submit">
            Send me an email
          </Button>
        </form>
      )}
    </Formik>
  </>
);

export default SendMailView;
