import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured';
import FileInput from '../../components/fileInput/FileInput';
import FileView from  "../../components/fileview/FileView"
import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';


const Home = () => {
  const { currentFile } = useContext(DataContext);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {currentFile ? (
          <>
            {/*-------- widgets -----------*/}
            <div className='widgets'>
              <Widget
                className='first'
                type='user'
                color='#fe5858'
                currentFile={currentFile}
              />
              <Widget
                className='second'
                type='order'
                color='#f3ab4c'
                currentFile={currentFile}
              />
              <Widget
                className='third'
                type='earning'
                color='#b3b3b3'
                currentFile={currentFile}
              />
              <Widget
                className='fourth'
                type='balance'
                color='#44e59d'
                currentFile={currentFile}
              />
            </div>
            <div className='main'>
              <Featured />
              <FileView/>
             
            </div>
          </>
        ) : (
          <FileInput />
          
        )}
      </div>
    </div>
  );
};

export default Home;
