import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from './components/Widget/Widget';

import Featured from './components/featured/Featured';
import FileInput from '../../components/fileInput/FileInput';
import FileView from './components/fileview/FileView';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { currentFile } = useContext(DataContext);

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        {currentFile ? (
          <>
            {/*-------- widgets -----------*/}
            <div className={styles.widgets}>
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
            <div className={styles.main}>
              <Featured />
              <FileView />
            </div>
          </>
        ) : (
          <FileInput />
        )}
      </div>
    </div>
  );
};

export default HomePage;
