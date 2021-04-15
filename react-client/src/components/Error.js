import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='App'>
            <h1>Oops.! Something must have gone Wrong</h1>
            <Link to='/' className='btn btn-success'>
                Home
            </Link>
        </div>
    );
}

export default Error;
