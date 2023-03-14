import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './ZoomGraph.scss';
import React, { PureComponent, useContext, useEffect, useState } from 'react';
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';
import FileInput from '../../components/fileInput/FileInput';
import { DataContext } from '../../context/DataContext';

const initialData = [
  { name: 1, cost: 4.11 },
  { name: 2, cost: 2.39 },
  { name: 3, cost: 1.37 },
  { name: 4, cost: 1.16 },
  { name: 5, cost: 2.29 },
  { name: 6, cost: 3 },
  { name: 7, cost: 0.53 },
  { name: 8, cost: 2.52 },
  { name: 9, cost: 1.79 },
  { name: 10, cost: 2.94 },
  { name: 11, cost: 4.3 },
  { name: 12, cost: 4.41 },
  { name: 13, cost: 2.1 },
  { name: 14, cost: 8 },
  { name: 15, cost: 0 },
  { name: 16, cost: 9 },
  { name: 17, cost: 3 },
  { name: 18, cost: 2 },
  { name: 19, cost: 3 },
  { name: 20, cost: 7 },
];

const initialState = {
  data: initialData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  animation: true,
};

function ZoomGraph() {
  const [value, setValue] = useState(initialState);
  const { currentFile } = useContext(DataContext);

  const getAxisYDomain = (from, to, ref, offset) => {
    const refData = value.data.slice(from - 1, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach((d) => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  };

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = value;
    const { data } = value;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      setValue((prev) => ({
        ...prev,
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);

    setValue((prev) => ({
      ...prev,
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
    }));
  };
  const zoomOut = () => {
    const { data } = value;
    setValue((prev) => ({
      ...prev,
      data: data,
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
    }));
  };

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
        cost: ((numberOfC - numberOfG) / (numberOfG + numberOfC)).toFixed(2),
      });
      startIndex = startIndex + 1;
    }
    setValue((prev) => ({ ...prev, data: results }));

    console.log(results);
  }, [currentFile]);

  return (
    <div
      className='highlight-bar-charts'
      style={{ userSelect: 'none', width: '100%' }}
    >
      <button type='button' className='btn update' onClick={zoomOut}>
        Zoom Out
      </button>

      <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar />
          {currentFile ? (
            <div>
              <div className='zoomgraph'>
                <LineChart
                  width={1000}
                  height={600}
                  data={value.data}
                  onMouseDown={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      refAreaLeft: e.activeLabel,
                    }))
                  }
                  onMouseMove={(e) =>
                    value.refAreaLeft &&
                    setValue((prev) => ({
                      ...prev,
                      refAreaRight: e.activeLabel,
                    }))
                  }
                  // eslint-disable-next-line react/jsx-no-bind
                  onMouseUp={zoom}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis
                    allowDataOverflow
                    dataKey='name'
                    domain={[value.left, value.right]}
                    type='number'
                  />
                  <YAxis
                    allowDataOverflow
                    domain={[value.bottom, value.top]}
                    type='number'
                    yAxisId='1'
                  />

                  <Tooltip />
                  <Line
                    yAxisId='1'
                    type='natural'
                    dataKey='cost'
                    stroke='#8884d8'
                    animationDuration={300}
                  />

                  {value.refAreaLeft && value.refAreaRight ? (
                    <ReferenceArea
                      yAxisId='1'
                      x1={value.refAreaLeft}
                      x2={value.refAreaRight}
                      strokeOpacity={0.3}
                    />
                  ) : null}
                </LineChart>
              </div>
            </div>
          ) : (
            <FileInput />
          )}
        </div>
      </div>
    </div>
  );
}

export default ZoomGraph;
