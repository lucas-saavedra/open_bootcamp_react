import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {

    const initialValues = {
        username: '',
        password: '',
        email: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
            username: Yup
                .string()
                .min(6, 'Username must be 6 chacarters long at least')
                .max(12, 'Username must be 12 chacartes long')
                .required('Username is required'),
            email: Yup
                .string()
                .email('Invalid email')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'Role not found')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Short password')
                .required('Password is required'),
            confirm: Yup.string().when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    'Password does not macth'
                )
            }).required('Confirm is required')
        }

    )

    const handleSubmit = (values) => {

        console.log(values);
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({
                    touched,
                    errors,
                    isSubmitting,

                }) => {
                    return (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field
                                id="username"
                                name="username"
                                placeholder="Jhon Doe"
                                type="text"
                            />
                            {errors.username && touched.username && (
                                <ErrorMessage component='div' name="username" />
                            )}
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
                            <label htmlFor="confirm">Password confirm</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="Your confirm here"
                                type="password"
                            />
                            {errors.confirm && touched.confirm && (
                                <ErrorMessage component='div' name="confirm" />
                            )}
                            <button type="submit">Register</button>
                            {isSubmitting && <p>Sign in......</p>}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default RegisterFormik