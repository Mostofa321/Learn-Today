import React from 'react';
import Option from '../option/Option';

let key = 0;
const Question = ({Question, questionNumber}) => {
    const{question, options, correctAnswer, id} = Question;
    
    return (
        <div className='w-75 mx-auto mb-5 shadow p-3  bg-body rounded'>
            <div className='d-flex'>
                <p className='w-50 mx-auto text-center'>Quiz {questionNumber}: {question} </p>
                <i class="fa-solid fa-eye text-primary"></i>
            </div>
            <div className='row row-cols-md-2 row-cols-1'>
                {
                    options.map(option => {
                        key += 1;
                        return(
                            <Option key={key} Key={key} option={option} id={id}></Option>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Question;