import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import FileInput from '../../components/fileInput/FileInput';
import './styles.css';
import {
  ComposedChart,
  Tooltip,
  Legend,
  Line,
  Area,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Brush,
} from 'recharts';
import _ from 'lodash';

const DATA_SIZE = 5760;

export default function App() {
  const { currentFile } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const windowSize = 50000;
    const increment = 10000;
    let startIndex = 0;
    let endIndex = currentFile?.length;

    let results = [];

    for (let i = startIndex; i < endIndex; i += increment) {
      let substring = currentFile.substring(i, i + windowSize);
      let numberOfC = substring.match(/C/g).length;
      let numberOfG = substring.match(/G/g).length;

      results.push({
        name: startIndex + 1,
        uv: (numberOfC - numberOfG) / (numberOfG + numberOfC),
      });
      startIndex = startIndex + 1;
    }
    setData(results);

    console.log(results);
  }, [currentFile]);

  const randomData = [];
  for (let i = 0; i < DATA_SIZE; i++) {
    randomData.push({
      name: i,
      uv: _.random(0, 5000),
      pv: _.random(0, 6000),
      amt: _.random(0, 4000),
    });
  }
  console.log(data);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />

        {currentFile ? (
          <ComposedChart width={1300} height={700} data={data} className="brushChart">
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke='#f5f5f5' />
            <Area
              type='monotone'
              dataKey='amt'
              fill='#8884d8'
              stroke='#8884d8'
            />
            {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
            <Brush startIndex={1} endIndex={280} dataKey='name' />
          </ComposedChart>
        ) : (
          <FileInput />
        )}
      </div>
    </div>
  );
}
