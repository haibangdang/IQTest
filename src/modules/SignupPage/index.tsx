// libs
import type { FC } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import * as formik from 'formik';
import * as Yup from 'yup';
// styled-components
import { SignupPageWrapper, SignupForm } from './SignupPage.styled';
// others

const SignupPage: FC = () => {
  const { Formik } = formik;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <SignupPageWrapper className="d-flex justify-content-center">
      <SignupForm className="my-5">
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            name: '',
            email: '',
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  controlId="validationFormik102"
                  className="position-relative"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormikUsername2">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
      </SignupForm>
    </SignupPageWrapper>
  );
};

export default SignupPage;
