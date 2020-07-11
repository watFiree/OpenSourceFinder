import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import Select from '../atoms/Select';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const CreateProjectForm = ({ close }) => {
  return (
    <Wrapper close={close}>
      <Title size="1.8rem">Create Project</Title>

      <Formik
        initialValues={{ name: '', stack: ['react'], about: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required !';
          } else if (!values.stack.length) {
            errors.stack = 'Stack is required !';
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
              label="Name"
              fullWidth
              id="name"
              name="name"
              autoComplete="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
            <Select id="stack" name="stack" value={values.stack} multiple>
              <MenuItem value="react">react</MenuItem>
              <MenuItem value="node">node</MenuItem>
            </Select>
            {errors.stack && touched.stack ? <ErrorMessage>{errors.stack}</ErrorMessage> : null}
            <Input
              label="About"
              multiline
              fullWidth
              id="about"
              name="about"
              autoComplete="about"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.about}
            />
            <Button type="submit" fullWidth bg="purpleDark" width="100%">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default CreateProjectForm;
