import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";

function Welcome(props) {

    const [user, setUser] = React.useState('');

    // console.log(user)
    function buttonHandler() {
        if (user !== '') {
            localStorage.setItem('user', JSON.stringify(user));
            props.setUser(user);
        }
    }
    if(JSON.parse(localStorage.getItem('user')) !== null) {
        // console.log(JSON.parse(localStorage.getItem('user')))
        return <Redirect to="/home" />
    }

    return (
        <div className="container my-5 text-center">
            <h2 className="text-center">Hello and welcome,</h2>
            <input type="text" placeholder="Please enter your name" className="form-control form-control-lg w-50 mx-auto mt-5" onChange={(e) => setUser(e.target.value)} />
            <div className="my-5">
                <Link to={`${user !== '' ? '/home' : '/'}`} onClick={() => buttonHandler()} className="btn btn-primary btn-lg">Continue</Link>
            </div>
        </div>
    )
}

export default Welcome