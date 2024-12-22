import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className=' text-6xl text-red-800 font-extrabold'>this is error </h1>
            <Link></Link>
            <Link to='/'><button>Go Home</button></Link>
        </div>
    );
};

export default Error;