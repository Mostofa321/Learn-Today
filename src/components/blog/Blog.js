import React from 'react';

const Blog = () => {
    return (
        <div className="accordion container pt-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>what is the purpose of react router?</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                      <p>React Router is a standard library for routing in React. It enables the navigation 
                        among views of various components in a React Application, allows changing the browser
                        URL, and keeps the UI in sync with the URL</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>How does context api works?</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>The React Context API is a way for a React app to effectively produce global variables
                        that can be passed around. This is the alternative to "prop drilling" or moving props
                        from grandparent to child to parent, and so on. Context is also touted as an easier,
                        lighter approach to state management using Redux.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>What is useRef and how do you use it?</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>The useRef is a hook that allows to directly create a reference to the DOM element in 
                        the functional component. Syntax: const refContainer = useRef(initialValue); The useRef
                        returns a mutable ref object. This object has a property called</p>
                </div>
                </div>
            </div>
        </div>
        
    );
};

export default Blog;