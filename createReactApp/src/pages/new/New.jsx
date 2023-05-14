import React from 'react';
import "./new.scss"
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />

      <div className='newContainer'>
        <div className='top'>
          <Navbar />
          <h1>add new user</h1>
        </div>

        <div className='bottom'>
          <div className='left'>
            <img  src=''  />
          </div>
          <div className='right'>
            <form>

            <div className='formInput'>
                <label htmlFor='file'>
                  File: <DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type="file" id='file' style={{display : "none"}} />
              </div>

              <div className='formInput'>
                <label>username</label>
                <input type="text" placeholder='aditya' />
              </div>

              <div className='formInput'>
                <label>name and surname</label>
                <input type="text" placeholder='sharma' />
              </div>

              <div className='formInput'>
                <label>Email</label>
                <input type="email" placeholder='aditya@gmail.com' />
              </div>

              <div className='formInput'>
                <label>phome</label>
                <input type="text" placeholder='234 234 234' />
              </div>

              <div className='formInput'>
                <label>password</label>
                <input type="password" />
              </div>

              <div className='formInput'>
                <label>address</label>
                <input type="text" placeholder='asdf swff ass22 323' />
              </div>


              <div className='formInput'>
                <label>country</label>
                <input type="text" placeholder='india' />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
