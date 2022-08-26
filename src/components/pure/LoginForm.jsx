import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalidad email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginForm = ({ logged, onLogin, fetching }) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    const initialCredentials = {
        email: "",
        password: "",
    };


    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                /**
                 * *Yup validation Schema
                 */
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await onLogin(values.email, values.password);
                }
                }
            >
                {({
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => {
                    return (

                        < Form >
                            {console.log(errors)}
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />

                            {
                                errors.email && touched.email && (
                                    <ErrorMessage component='div' name="email" />
                                )
                            }
                            <label htmlFor="email">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Your password here"
                                type="password"
                            />
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage component='div' name="password" />
                                )
                            }
                            <button type="submit">Login</button>
                            {fetching && < p > Login......</p>}
                            {isSubmitting && <p>Login......</p>}

                        </Form>
                    );
                }}
            </Formik>
        </div >
    );
}

LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
}

export default LoginForm