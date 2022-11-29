import React from 'react';
import { Formik, Form, Field } from 'formik';
import { createUserRequestAction } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const UserForm = props => {
  const { createUserRequestAction } = props;
  const onSubmitForm = (values, formikBag) => {
    createUserRequestAction(values);
  };
  return (
    <>
      <h1>User Registration Form</h1>
      <Formik
        initialValues={{
          firstName: 'Alex',
          lastName: 'Doe',
          email: 'asdf@sdf.zjfl',
          birthday: '2000-01-05',
          password: 'luygf*%$jnbhnd82'
        }}
        onSubmit={onSubmitForm}
      >
        <Form>
          <Field name='firstName' placeholder='firstName' />
          <Field name='lastName' placeholder='lastName' />
          <Field name='email' placeholder='email' />
          <Field name='birthday' placeholder='birthday' />
          <Field name='password' placeholder='password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  createUserRequestAction
};
export default connect(null, mapDispatchToProps)(UserForm);
