import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className=''>
            <div className='text-center'>
                <h1 className='errorNumber text-danger pt-5'>404</h1>
                <h4>Not Found</h4>
                <p>the resource requested could not be found on this server!</p>
                <Link to='/topics'><button className='btn btn-info px-5 '>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;