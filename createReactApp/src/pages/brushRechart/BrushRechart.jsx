import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import FileInput from '../../components/fileInput/FileInput';
import './BrushRechart.scss';
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
  Label,
} from 'recharts';
import _ from 'lodash';
import Rodal from 'rodal';

const DATA_SIZE = 5760;

export default function App() {
  const { currentFile } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [windowSize, setWindowSize] = useState(50000);
  const [increment, setIncrement] = useState(10000);

  const handleSubmit = () => {
    setModalVisible(false);
    let startIndex = 0;
    let endIndex = currentFile?.length;

    let results = [];

    for (let i = startIndex; i < endIndex; i += increment) {
      let substring = currentFile.substring(i, i + windowSize);
      let numberOfC = substring.match(/C/g).length;
      let numberOfG = substring.match(/G/g).length;

      results.push({
        name: startIndex + 1,
        window_number: (numberOfC - numberOfG) / (numberOfG + numberOfC),
      });
      startIndex = startIndex + 1;
    }
    setData(results);
  };

  console.log(data);
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />

        {currentFile ? (
          <div className='brushChartContainer'>
            <Rodal
              visible={modalVisible}
              showCloseButton={false}
              width='600'
              height='300'
            >
              <div>Choose Window-size and Increment</div>

              <label className='input'>
                <input
                  className='input__field'
                  type='text'
                  placeholder=' '
                  value={windowSize}
                  onChange={(e) => setWindowSize(+e.target.value)}
                />
                <span className='input__label'>Window Size</span>
              </label>

              <label className='input'>
                <input
                  className='input__field'
                  type='text'
                  placeholder=' '
                  value={increment}
                  onChange={(e) => setIncrement(+e.target.value)}
                />
                <span className='input__label'>Increment</span>
              </label>

              <button className='submit-button' onClick={handleSubmit}>
                Submit
              </button>
            </Rodal>
            {!modalVisible ? (
              <ComposedChart
                width={1300}
                height={700}
                data={data}
                className='brushChart'
              >
                <XAxis dataKey='name'></XAxis>
                <YAxis>
                  <Label
                    value='C-G / C+G'
                    offset={0}
                    position='center'
                    angle='-90'
                    style={{ fill: '#fff' }}
                  />
                </YAxis>
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#f5f5f5' />
                {/* <Area
                type='monotone'
                dataKey='amt'
                fill='#8884d8'
                stroke='#8884d8' 
              />*/}
                {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}

                <Line
                  type='monotone'
                  dataKey='window_number'
                  stroke='#89023E'
                />
                <Brush startIndex={1} endIndex={280} dataKey='name' />
              </ComposedChart>
            ) : (
              <></>
            )}
            {!modalVisible && data.length >= 0 ? (
              <div className='table-container  '>
                <table className='searchSequence-container-table'>
                  <tr>
                    <th>X value</th>
                    <th>Y Value</th>
                  </tr>
                  {data.map((tr, index) => (
                    <tr key={index}>
                      <td>{tr.name}</td>
                      <td>{tr.window_number}</td>
                    </tr>
                  ))}
                </table>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <FileInput />
        )}
      </div>
    </div>
  );
}
