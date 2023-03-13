import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './ReChartGraph.scss';
import Widget from '../../components/widgets/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import FileInput from '../../components/fileInput/FileInput';
import { DataContext } from '../../context/DataContext';
import { useContext, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ReChartGraph = () => {
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

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
    return dataMax / (dataMax - dataMin);
  };
  const off = gradientOffset();
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {currentFile ? (
          <>
            <div className='recharts'>
              <AreaChart
                width={1200}
                height={600}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <defs>
                  <linearGradient id='splitColor' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset={off} stopColor='green' stopOpacity={1} />
                    <stop offset={off} stopColor='red' stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  type='monotone'
                  dataKey='uv'
                  stroke='#000'
                  fill='url(#splitColor)'
                />
              </AreaChart>
            </div>
          </>
        ) : (
          <FileInput />
        )}
      </div>
    </div>
  );
};

export default ReChartGraph;
