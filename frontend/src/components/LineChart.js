import React from 'react';
import { Line } from 'react-chartjs-2';
import { LINE_DATA, API_URL } from '../common';


export default () => (
    <div>
        {console.log(API_URL)}
        <h2>Line Example</h2>
        <Line data={LINE_DATA}/>
    </div>
);
