import React, {SyntheticEvent, useState} from 'react';

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        console.log({
            name,
            email,
            password
        });
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <input type="text" className="form-control" placeholder="Name" required onChange={e => setName(e.target.value)}/>

                <input type="email" className="form-control" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>

                <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Registration;