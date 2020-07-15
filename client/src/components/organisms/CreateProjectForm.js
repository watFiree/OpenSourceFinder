import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import Select from '../atoms/Select';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import { createProject } from '../../redux/actions/createProject';
import useFormClose from '../../hooks/useFormClose';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const CreateProjectForm = ({ user, forms: { createProjectForm }, createProject, close }) => {
  useEffect(() => {
    if (!user.isAuth) return close(null);
  }, [user, close]);
  const [setSubmitted] = useFormClose(createProjectForm, close);
  return (
    <Wrapper close={close}>
      <Title size="1.8rem">Create Project</Title>

      <Formik
        initialValues={{ name: '', stack: ['react'], about: { desc: '', biogram: '' } }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required !';
          } else if (!values.stack.length) {
            errors.stack = 'Stack is required !';
          }

          if (values.about.biogram) {
            if (values.about.biogram.length > 20) errors.biogram = 'Biogram too long !';
          }
          return errors;
        }}
        onSubmit={(values) => {
          createProject(values);
          setSubmitted(true);
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
              label="Biogram"
              fullWidth
              id="about.biogram"
              name="about.biogram"
              autoComplete="biogram"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.about.biogram}
            />
            {errors.biogram && touched.stack ? <ErrorMessage>{errors.biogram}</ErrorMessage> : null}
            <Input
              label="Description"
              multiline
              fullWidth
              id="about.desc"
              name="about.desc"
              autoComplete="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.about.desc}
            />
            {!createProjectForm.processing && createProjectForm.error ? (
              <ErrorMessage>{createProjectForm.error}</ErrorMessage>
            ) : null}
            <Button type="submit" fullWidth bg="purpleDark" width="100%">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default connect(mapStateToProps('user', 'forms'), { createProject })(CreateProjectForm);
