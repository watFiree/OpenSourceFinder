import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import Input from '../../components/atoms/Input';
import Title from '../../components/atoms/Title';
import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';

const NewPasswordView = ({ history, data }) => (
  <>
    <Title size="1.8rem">Set new password</Title>
    <Formik
      initialValues={{ data, password: '', repeated: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.password && !values.repeated) {
          errors.password = 'Password required';
        } else if (values.password.length < 6) {
          errors.password = 'Password too short !';
        } else if (values.password !== values.repeated) {
          errors.password = "Passwords don't match";
        }
        return errors;
      }}
      onSubmit={(values, { setStatus, resetForm }) => {
        axios
          .post('/user/forgotReset', values)
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
            label="Password"
            fullWidth
            type="password"
            id="password"
            title="password"
            autoComplete="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <Input
            label="Repeat password"
            fullWidth
            type="password"
            id="repeated"
            title="repeated"
            autoComplete="repeated"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.repeated}
          />
          {status && !errors.password ? <ErrorMessage>{status}</ErrorMessage> : null}
          {errors.password && touched.password && touched.repeated ? (
            <ErrorMessage>{errors.password}</ErrorMessage>
          ) : null}
          <Button bg="purpleDark" type="submit">
            Set new password
          </Button>
        </form>
      )}
    </Formik>
  </>
);

export default NewPasswordView;
