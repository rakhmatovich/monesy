import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Family', 'Health', 'Food', 'Transport', 'Shopping', 'Have Fun'],
    datasets: [
        {
            label: '%',
            data: [15, 25, 30, 10, 5, 5],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(153, 102, 255,0.7)',
                'rgba(255, 159, 64, 0.7)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart({title}) {
    const date = new Date()
    return (
        <div className='w-full text-base-100 h-[400px] bg-primary px-10 pt-6 pb-20 rounded-2xl'>
            <h1 className="text-2xl text-center mb-2">{title} {date.getFullYear()}</h1>
            <div className="flex">
                <div className="w-[50%]">
                    <Pie data={data}/>
                </div>
                <div className='w-[50%]'>
                    {data.labels.map((label, index) => (
                        <div>
                            <div className="flex justify-between items-center">
                                <p>{label}</p>
                                <p>{data.datasets[0].data[index]}%</p>
                            </div>
                            <progress className="progress progress-accent bg-gray-700 w-full"
                                      value={data.datasets[0].data[index]} max="100"></progress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
