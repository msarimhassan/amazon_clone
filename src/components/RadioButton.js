import React from 'react';

const RadioButton = ({ label, onClick, selected }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer' }} className='d-flex Address-Card mt-3 ms-2'>
            <div className='radio-btn'>
                {selected && (
                    <div className='inside-btn' style={{ backgroundColor: '#f5bb5c' }}></div>
                )}
            </div>
            <div className='ms-2'>{label}</div>
        </div>
    );
};

export default RadioButton;
