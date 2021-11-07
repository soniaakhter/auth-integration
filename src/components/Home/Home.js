import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>This is home page</h1>
            <h2>UserName: {user.displayName} </h2>
        </div>
    );
};

export default Home;