import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/dayjs';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import { createTask } from '../../redux/actions/createTask';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const StyledDatePicker = styled(KeyboardDatePicker)`
  .MuiInputBase-root {
    color: ${({ theme }) => theme.white || 'white'};
    &::before {
      border-bottom-color: ${({ theme }) => theme.purpleLight || 'white'};
    }
    &::after {
      border-bottom-color: ${({ theme }) => theme.purpleDark || 'white'};
    }
  }
  .MuiInput-underline:hover:before {
    border-bottom-color: ${({ theme }) => theme.purpleLight};
  }

  .MuiFormHelperText-root.Mui-error {
    display: none;
  }
  .MuiIconButton-root {
    color: ${({ theme }) => theme.purpleDark || 'white'};
  }
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.purpleLight || 'white'};
  }
`;

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <StyledDatePicker
      margin="normal"
      id="date-picker-dialog"
      label="Deadline date"
      format="MM/DD/YYYY"
      value={value}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        onChange(name, val);
      }}
    />
  );
};

const CreateTaskForm = ({ createTask, id, close }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper close={close}>
        <Title size="1.8rem">Create task</Title>

        <Formik
          initialValues={{ id, title: '', content: '', expiration: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Title is required !';
            }
            if (!values.content) {
              errors.title = 'Content is required !';
            }
            return errors;
          }}
          onSubmit={(values) => {
            createTask(values);
          }}
        >
          {({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                label="Title"
                fullWidth
                id="title"
                title="title"
                autoComplete="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title ? <ErrorMessage>{errors.title}</ErrorMessage> : null}
              <Input
                label="Content"
                fullWidth
                id="content"
                title="content"
                autoComplete="content"
                multiline
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <DatePickerField
                name="expiration"
                value={values.expiration}
                onChange={setFieldValue}
              />

              <Button type="submit" fullWidth bg="purpleDark" width="100%">
                Create
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default connect(null, { createTask })(CreateTaskForm);
