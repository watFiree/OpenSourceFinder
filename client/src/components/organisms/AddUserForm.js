import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const CreateProjectForm = ({ close }) => {
  return (
    <Wrapper height="25vh" close={close}>
      <Title size="1.8rem">Add user</Title>

      <Formik
        initialValues={{ nickname: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.nickname) {
            errors.nickname = 'Nickname is required !';
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              label="Nickname"
              fullWidth
              id="nickname"
              nickname="nickname"
              autoComplete="nickname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nickname}
            />
            {errors.nickname && touched.nickname ? (
              <ErrorMessage>{errors.nickname}</ErrorMessage>
            ) : null}
            <Button type="submit" fullWidth bg="purpleDark" width="100%">
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default CreateProjectForm;
