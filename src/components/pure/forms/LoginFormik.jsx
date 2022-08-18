import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import { useState } from "react";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalidad email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let { error, auth, signin } = useAuth()
    let from = location.state?.from?.pathname || "/";
    const [errorMesssage, setErrorMesssage] = useState(null)

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
                onSubmit={
                    async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        await signin(values);
                        navigate(from, { replace: true })

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
                            {errorMesssage && 'Password not correct'}
                            {isSubmitting && <p>Login......</p>}
                        </Form>
                    );
                }}
            </Formik>
        </div >
    );
};

export default LoginFormik;
