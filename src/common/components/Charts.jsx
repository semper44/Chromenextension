/* eslint-disable no-unused-vars */
import React from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'January', chart: 10 },
  { name: 'February', chart: 19 },
  { name: 'March', chart: 6 },
  { name: 'April', chart: 5 },
  { name: 'May', chart: 22 },
  { name: 'June', chart: 12 },
  { name: 'July', chart: 12 },
  { name: 'Aug', chart: 32 },
];


function Charts() {
  return (
    <div>
      <AreaChart width={150} height={60} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e71d36" stopOpacity={0.8} />
            <stop offset="40%" stopColor="#8884d8" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#00000030" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="5 1"  fillOpacity={0.9}/> */}
        <XAxis hide={true} />
        <YAxis hide={true} />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Area type="monotoneY" dataKey="chart" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}

export default Charts