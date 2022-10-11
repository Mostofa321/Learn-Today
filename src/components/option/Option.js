import React from 'react';

const Option = ({option, Key, id}) => {
    console.log(Key)
    return (
        <div className='d-flex align-items-center justify-content-center border border-dark p-3 col'>
            <input className='me-2' type="radio" id={Key} name={id} value={id}/>
            <label htmlFor={Key} className=''>{option}</label>
        </div>
    );
};

export default Option;