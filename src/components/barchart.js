import React, { PureComponent } from 'react';
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1월',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2월',
    uv: 3000,
    pv: 3000,
    amt: 2210,
  },
  {
    name: '3월',
    uv: 2000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: '4월',
    uv: 2780,
    pv: 4200,
    amt: 2000,
  },
  {
    name: '5월',
    uv: 1890,
    pv: 8000,
    amt: 2181,
  },
  {
    name: '6월',
    uv: 2390,
    pv: 9500,
    amt: 2500,
  },
  {
    name: '7월',
    uv: 3490,
    pv: 12000,
    amt: 2100,
  },
  {
    name: '8월',
    uv: 3490,
    pv: 11000,
    amt: 2100,
  },  {
    name: '9월',
    uv: 3490,
    pv: 12040,
    amt: 2100,
  },  {
    name: '10월',
    uv: 3490,
    pv: 12300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

  render() {
    return (
        <LineChart width={250} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
          <Line type="monotone" dataKey="pv" stroke="#ff0266" strokeWidth={2} />
        </LineChart>
            

    ) 
  }
}
