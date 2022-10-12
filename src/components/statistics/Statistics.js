import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quiz Statistics',
      },
    },
  };



const Statistics = () => {
    const quizQuantities = []
    const labels = [];
    const apiData = useLoaderData()
    console.log(apiData)
    apiData.data.map(quizCategory => {
        quizQuantities.push(quizCategory.total);
        labels.push(quizCategory.name);
    });
    console.log(quizQuantities);
    const [data, setData3] = useState(
        {
            labels,
            datasets: [
              {
                label: 'Available Quiz',
                data: quizQuantities,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }
            ],
          }
    );
 
    return (
        <div className='container px-md-5'>
            <Bar data={data} options={options}/>            
        </div>
    );
};

export default Statistics;