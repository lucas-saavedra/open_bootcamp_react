import React, { useRef } from 'react'
import PropTypes from "prop-types";
import { userClass } from '../../../models/userClass';

const ContactForm = ({ addUser }) => {
    const nameRef = useRef('');
    const lastnameRef = useRef('')
    const emailRef = useRef('')
    const addTask = (e) => {
        e.preventDefault();
        const newUser = new userClass(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false,
        )
        addUser(newUser)
        document.querySelector('#userForm').reset()
    }
    return (
        <div className="row">
            <div className="col">
                <form className='mb-4 p-3' id='userForm' onSubmit={addTask}>
                    <div className=" mb-3">
                        <label className='sr-only mb-3' htmlFor="inputName">Name</label>
                        <input ref={nameRef} id="fname" name="fname" className='form-control' required autoFocus />
                    </div>
                    <div className=" mb-3">
                        <label className='sr-only mb-3' htmlFor="lname">Lastname</label>
                        <input ref={lastnameRef} id='lname' name='lname' type="text" className='form-control' required />
                    </div>
                    <div className=" mb-3">
                        <label className='sr-only mb-3' htmlFor="email">Email</label>
                        <input ref={emailRef} id='email' name='email' type="text" className='form-control' required />
                    </div>
                    <div className='mx-auto text-center'>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>

    )
}
ContactForm.propTypes = {
    addUser: PropTypes.func.isRequired
}
export default ContactForm