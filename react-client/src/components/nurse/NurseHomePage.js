import React from 'react';
import { isUserAuthenticated } from '../../Helper';
import { Redirect } from 'react-router-dom';
import CreateTip from './CreateTip';
import "../../App.css";

function NurseHomePage() {
    return (
        <>
            {isUserAuthenticated() ? (
                <div className='App'>
                    <CreateTip />
                </div>
            ) : (
                <Redirect to='/nurse' />
            )}
        </>
    );
}

export default NurseHomePage;
