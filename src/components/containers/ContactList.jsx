import { useState } from "react";
import { userClass } from "../../models/userClass";
import ContactComponent from "../pure/ContactComponent";
import ContactForm from "../pure/forms/ContactForm";

const ContactList = () => {
    const defaultUser1 = new userClass(
        'Lucas',
        'Saavedra',
        'email@gmail.com',
        true
    );
    const defaultUser2 = new userClass(
        'Mario',
        'Bross',
        'up@gmail.com',
        false
    );
    const defaultUser3 = new userClass(
        'Luigi',
        'Bross',
        'Luigi@gmail.com',
        false
    );
    const [users, setUsers] = useState([defaultUser1, defaultUser2, defaultUser3]);
    const toggleUserConection = (user) => {
        const index = users.indexOf(user);
        const tempUsers = [...users];
        tempUsers[index].connected = !tempUsers[index].connected;
        setUsers(tempUsers)
    }
    const deleteUser = (user) => {
        const index = users.indexOf(user);
        const tempUsers = [...users];
        tempUsers.splice(index, 1);
        setUsers(tempUsers)

    }
    const addUser = (user) => {
        setUsers([...users, user])
    }
    return (
        <div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    <div className="card-body" style={{ position: 'relative', height: '400px' }}>
                        <table className="">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Connected</th>
                                </tr>
                            </thead>
                            <tbody>

                                {users.map((user, index) => {
                                    return (
                                        <ContactComponent
                                            togleConnection={toggleUserConection}
                                            key={index}
                                            user={user}
                                            deleteUser={deleteUser}
                                            addUser={addUser}
                                        >
                                        </ContactComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <ContactForm addUser={addUser} />
                </div>
            </div>
        </div >
    )
}


export default ContactList
