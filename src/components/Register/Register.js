import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email"></input> <br />
                <input type="password"></input> <br />
                <button type="submit">Submit</button>
            </form>
            <Link to="/login">Already Regustered?</Link>
        </div>
    );
};

export default Register;