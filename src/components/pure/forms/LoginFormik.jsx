import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalidad email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
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
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => {
                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />

                            {errors.email && touched.email && (

                                <ErrorMessage component='div' name="email" />

                            )}
                            <label htmlFor="email">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Your password here"
                                type="password"
                            />
                            {errors.password && touched.password && (

                                <ErrorMessage component='div' name="password" />

                            )}
                            <button type="submit">Login</button>
                            {isSubmitting && <p>Login......</p>}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default LoginFormik;
