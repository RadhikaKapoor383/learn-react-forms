import { Field, Form, Formik } from 'formik';
import './FormikForm.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: '',
  dateOfBirth: '',
  gender: '',
  degree: '',
  skills: [],
  experience: '',
  bio: '',
  hobbies: [],
  country: '',
  terms: false,
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  }
  if (!values.password.trim()) {
    errors.password = 'Password is required';
  }
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  if (!values.age.trim()) {
    errors.age = 'Age is required';
  }
  if (!values.dateOfBirth.trim()) {
    errors.dateOfBirth = 'Date of Birth is required';
  }
  if (!values.terms) {
    errors.terms = 'You must accept the terms and conditions';
  }

  return errors;
}

function ErrorMessage({ children }) {
  return <p style={{ color: 'red' }}>{children}</p>;
}

export default function FormikForm() {
  function handleSubmit(values, { resetForm }) {
    alert(
      `Name: ${values.name}
Email: ${values.email}
Password: ${values.password}
Confirm Password: ${values.confirmPassword}
Age: ${values.age}
Date of Birth: ${values.dateOfBirth}`
    );
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className="formik-form">
          <label>Name:</label>
          <Field name="name" />
          {touched.name && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          <br /> <br />

          <label>Email:</label>
          <Field name="email" type="email" />
          {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <br /> <br />

          <label>Password:</label>
          <Field name="password" type="password" />
          {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <br /> <br />

          <label>Confirm Password:</label>
          <Field name="confirmPassword" type="password" />
          {touched.confirmPassword && errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}
          <br /> <br />

          <label>Age:</label>
          <Field name="age" />
          {touched.age && errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
          <br /> <br />

          <label>Date of Birth:</label>
          <Field name="dateOfBirth" type="date" />
          {touched.dateOfBirth && errors.dateOfBirth && (
            <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>
          )}
          <br /> <br />

          <label>Gender:</label>
          <Field name="gender" as="select">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <br /> <br />

          <label>Degree:</label>
          <Field name="degree" as="select">
            <option value="">Select</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
          </Field>
          <br /> <br />

          <label>Skills:</label>
          <label>
            <Field type="checkbox" name="skills" value="javascript" /> JavaScript
          </label>
          <label>
            <Field type="checkbox" name="skills" value="react" /> React
          </label>
          <label>
            <Field type="checkbox" name="skills" value="nodejs" /> Node.js
          </label>
          <br /> <br />

          <label>Experience:</label>
          <Field name="experience" as="textarea" />
          <br /> <br />

          <label>Bio:</label>
          <Field name="bio" as="textarea" />
          <br /> <br />

          <label>Hobbies:</label>
          <label>
            <Field type="checkbox" name="hobbies" value="reading" /> Reading
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="traveling" /> Traveling
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="cooking" /> Cooking
          </label>
          <br /> <br />

          <label>Country:</label>
          <Field name="country" as="select">
            <option value="">Select</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </Field>
          <br /> <br />

          <label>
            <Field type="checkbox" name="terms" />
            I accept the terms and conditions
          </label>
          {touched.terms && errors.terms && <ErrorMessage>{errors.terms}</ErrorMessage>}
          <br /> <br />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
