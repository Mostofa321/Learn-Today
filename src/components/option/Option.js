import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, Key, id, correctAnswer}) => {
    const notify1 = () => toast('Correct Answer');
    const notify2 = () => toast('Rong Answer');
    const correctAnswerChecker = () =>{
        (option === correctAnswer) ? notify1() : notify2();
    }
    return (
        <div className='d-flex align-items-center justify-content-center border border-dark p-3 col'>
            <input className='me-2' type="radio" id={Key} name={id} value={id}/>
            <label htmlFor={Key} onClick={correctAnswerChecker}>{option}</label>
            <ToastContainer />
        </div>
    );
};

export default Option;