import React from 'react';
import { Link } from 'react-router-dom';

const MyQueries = () => {
    return (
        <div className=' min-h-[calc(100vh-120px)]'>
            <Link to='/addQueries'><button className='btn'>Add Queries</button></Link>
        </div>
    );
};

export default MyQueries;