//used
import React from 'react';

const Title = ({ head, details }) => {
    return (
        <div className='space-y-4'>
            <p className='text-sm text-red-600'>{head}</p>
            <h2 className='text-3xl font-semibold'>{details}</h2>
        </div>
    );
};

export default Title;