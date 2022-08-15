import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from 'yup';
import { LEVELS } from "../../../models/levels.enum";
import { taskClass } from "../../../models/task.class";

const TaskFormik = ({ add }) => {
    const taskSchema = Yup.object().shape(
        {
            name: Yup
                .string()
                .required('Name is required'),
            description: Yup
                .string()
                .min(10)
                .required('Description is required'),
            completed: Yup.boolean().required('Filed is required'),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'Level not found')
                .required('Level is required'),
        }

    )

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        completed: false
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={({ name, description, level }) => {
                const newTask = new taskClass(
                    name,
                    description,
                    false,
                    level
                )
                add(newTask)
            }

            }
        >
            {({ errors, touched, isSubmitting }) => {
                return (
                    <div className="row">
                        <div className="col">
                            <Form className='mb-1 p-3'>
                                <div className=" mb-3">
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        className='form-control'
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                        autoFocus
                                    />
                                    {errors.name && touched.name && (
                                        <ErrorMessage component='div' name="name" />
                                    )}
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="description">Description</label>
                                    <Field
                                        className='form-control'
                                        id="description"
                                        name="description"
                                        placeholder="Type a description..."
                                        type="text"

                                    />
                                    {errors.description && touched.description && (
                                        <ErrorMessage component='div' name="description" />

                                    )}

                                </div>


                                <div className=" mb-3">
                                    <label htmlFor="level">Priority</label>
                                    <Field as="select" className='form-select mb-3' name='level' id='level'>
                                        <option className='options' value={LEVELS.NORMAL}>Normal</option>
                                        <option className='options' value={LEVELS.URGENT}>Urgent</option>
                                        <option className='options' value={LEVELS.BLOCKING}>Blocking</option>
                                    </Field>

                                    {errors.level && touched.level && (
                                        <ErrorMessage component='div' name="level" />
                                    )}
                                </div>
                                <button className="btn btn-primary" type="submit">Create</button>
                                {isSubmitting && <p>Sign in......</p>}

                            </Form>
                        </div>

                    </div >
                )
            }

            }
        </Formik >
    )
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired
}
export default TaskFormik