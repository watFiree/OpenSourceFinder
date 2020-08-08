import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/dayjs';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import Checkbox from '../atoms/Checkbox';
import ErrorMessage from '../atoms/ErrorMessage';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import { createTask } from '../../redux/actions/createTask';
import { editTask } from '../../redux/actions/editTask';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useFormClose from '../../hooks/useFormClose';

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

const DatePickerField = ({ name, value, onChange }) => (
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

const CreateTaskForm = ({
  forms: { createTaskForm },
  createTask,
  editTask,
  data,
  close,
  edit = false,
}) => {
  const [setSubmitted] = useFormClose(createTaskForm, close);
  const { projectId = '', _id: taskId = '', title = '', content = '', expiration = '' } = data;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper close={close}>
        <Title size="1.8rem">{edit ? 'Edit' : 'Create'} task</Title>

        <Formik
          initialValues={{ projectId, taskId, title, content, expiration, taken: false }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Title is required !';
            }
            if (!values.content) {
              errors.content = 'Content is required !';
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (edit) {
              editTask(values);
            } else {
              createTask(values);
            }
            setSubmitted(true);
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
              {errors.content && touched.content ? (
                <ErrorMessage>{errors.content}</ErrorMessage>
              ) : null}
              <DatePickerField
                name="expiration"
                value={values.expiration}
                onChange={setFieldValue}
              />
              {!edit && (
                <FormControlLabel
                  control={
                    <Checkbox
                      id="taken"
                      onChange={handleChange}
                      value={values.taken}
                      color="primary"
                    />
                  }
                  label="Mark me as contributor"
                />
              )}
              {!createTaskForm.processing && createTaskForm.error ? (
                <ErrorMessage>{createTaskForm.error}</ErrorMessage>
              ) : null}
              <Button type="submit" fullWidth bg="purpleDark" width="100%">
                {edit ? 'Edit' : 'Create'}
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default connect(mapStateToProps('forms'), { createTask, editTask })(CreateTaskForm);
