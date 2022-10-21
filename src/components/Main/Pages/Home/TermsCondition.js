import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
            <h2>Here is our terms and condition</h2>
            <p>Go back to rejistreation <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default TermsCondition;