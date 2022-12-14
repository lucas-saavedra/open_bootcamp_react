import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import { useState } from "react";
import { axiosLogin, getAllUsers } from "../../../services/axiosService";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalidad email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
    /* let navigate = useNavigate();
    let location = useLocation(); */
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    const authUser = async (email, password) => {
        try {
            setLoading(true)
            const result = await axiosLogin(email, password);
            sessionStorage.setItem('token', result.token)
            setLoading(false)

        } catch (error) {
            sessionStorage.removeItem('token')
            setError(error);
        }
    };

    /*     let from = location.state?.from?.pathname || "/"; */


    const initialCredentials = {
        email: "",
        password: "",
    };

    // * CRUD
    const obtainAllUser = async () => {
        
        const result = await getAllUsers();
        console.log(result.data.data);
    }
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
                    async ({ email, password }) => {
                        await authUser(email, password)
                        /* navigate(from, { replace: true }) */
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

                            {isSubmitting && <p>Login......</p>}


                        </Form>
                    );
                }}
            </Formik>
        </div >
    );
};

export default LoginFormik;
