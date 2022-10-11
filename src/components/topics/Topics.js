import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../category/Category';
import './Topics.css';

const Topics = () => {
    const quizData = useLoaderData();
    const quizCategories = quizData.data;
    
    return (
        <div>
            <section className='banner  p-5 row justify-content-center align-items-center'>
                <div className='col-12 col-md-6'>
                    <h1 className='text-white mt-5'>Learn Today And Check Your Programming Knowledge</h1>
                    <p className='text-white'>Take quizzes on different programming languages
                         ​​and test your programming knowledge and make yourself proficient in your preferred programming language
                    </p>
                </div>
            </section>
            <h1 className='my-5 text-center'>Quiz Categories</h1>
            
            <div className='row row-cols-1  g-4  justify-content-center container mx-auto mb-5'>
                {
                    quizCategories.map(quizCategory => <Category key={quizCategory.id} quizCategory={quizCategory}></Category>)
                }               
               
            </div>            
        </div>
    );
};

export default Topics;