import './FileView.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../../context/DataContext';

const FileView = () => {
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

  return (
    <div className={`fileview`}>
      <div className='top'>
        <h1 className='title'>File View</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <p>{currentFile}</p>
      </div>
    </div>
  );
};

export default FileView;
