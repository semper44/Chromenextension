/* eslint-disable no-unused-vars */
import React from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from "./chart.module.css"

const data = [
    { name: 'January', sales: 12 },
    { name: 'February', sales: 19 },
    { name: 'March', sales: 3 },
    { name: 'April', sales: 5 },
    { name: 'May', sales: 2 },
    { name: 'June', sales: 3 },
  ];
  

function Charts() {
  return (
    <div> 
        <AreaChart width={150} height={80} data={data} tick={false}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e71d36" stopOpacity={0.8} />
            <stop offset="40%" stopColor="#8884d8" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#00000030" stopOpacity={0.3} />
            </linearGradient>
        </defs>
        <XAxis hide={true} />
        <YAxis hide={true}/>
        <Tooltip />
        {/* <Legend /> */}
        <Area type="monotone" dataKey="sales" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    </div>
  )
}

export default Charts