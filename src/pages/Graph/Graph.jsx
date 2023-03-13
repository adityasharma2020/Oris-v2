import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './Graph.scss';
import Widget from '../../components/widgets/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import FileInput from '../../components/fileInput/FileInput';
import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';

const Graph = () => {
  const { currentFile } = useContext(DataContext);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {currentFile ? (
          <>
            <div className='main'>
              <Chart />
            </div>
          </>
        ) : (
          <FileInput />
        )}
      </div>
    </div>
  );
};

export default Graph;
