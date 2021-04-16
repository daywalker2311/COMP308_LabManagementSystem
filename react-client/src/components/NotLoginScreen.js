import React from 'react';
import Button from 'react-bootstrap/Button';
import "../App.css";


function NotLoginScreen(props) {
    const { route, userRole } = props;
    return (
        <div className='App'>
            <h1>Hello {userRole}, you are not logged in</h1>
            <Button class="buttonsp" href={route}>
                Login here
            </Button>
        </div>
    );
}

export default NotLoginScreen;
