import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';

const Quizes = () => {
    const quizes = useLoaderData();
    const {name, questions} = quizes.data;
    let questionNumber = 0;
    return (
        <div>
            <h3 className=' text-center'>Quiz of {name}</h3>
            {
                questions.map(question => {
                    questionNumber +=1;
                    return(
                        <Question 
                            key={question.id} 
                            Question={question} 
                            questionNumber={questionNumber}>
                        </Question>
                    )
                })
            }
        </div>
    );
};

export default Quizes;