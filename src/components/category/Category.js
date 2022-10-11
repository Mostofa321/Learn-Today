import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({quizCategory}) => {
    const {logo, name, id}= quizCategory
    return (
            <div className='col-md-3'>
                <div className='card'>
                    <img src={logo} className='card-img-top img-fluid bg-dark'  alt="..."/>
                    <div className='card-body'>
                        <h5 className='card-title'>Category : {name}</h5>
                        <Link to={`/topics/${id}`}>
                            <button className='btn btn-primary w-100 fw-bold' type="button">Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div> 
        
    );
};

export default Category;