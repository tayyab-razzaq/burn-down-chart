import React from 'react';
import { Line } from 'react-chartjs-2';
import { LINE_DATA } from '../common';


export default () => (
    <div>
        <h2>Line Example</h2>
        <Line data={LINE_DATA}/>
    </div>
);
