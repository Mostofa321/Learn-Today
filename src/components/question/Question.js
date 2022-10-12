import React from 'react';
import Option from '../option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let key = 0;
const Question = ({Question, questionNumber}) => {
    const{question, options, correctAnswer, id} = Question;
    const notify = () => toast(`Correct Answer Is: ${correctAnswer}`);
    
    return (
        <div className='w-75 mx-auto mb-5 shadow p-3  bg-body rounded'>
            <div className='d-flex'>
                <p className='w-50 mx-auto text-center'>Quiz {questionNumber}: {question} </p>
                <i className='fa-solid fa-eye text-primary' onClick={notify}></i>
                <ToastContainer />
            </div>
            <div className='row row-cols-md-2 row-cols-1'>
                {
                    options.map(option => {
                        key += 1;
                        return(
                            <Option 
                                key={key} 
                                Key={key} 
                                option={option} 
                                id={id}
                                correctAnswer={correctAnswer}
                                >
                            </Option>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Question;