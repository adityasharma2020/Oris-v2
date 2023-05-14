import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './SkewCalculator.scss';
import { useRef, useState } from 'react';

const SkewCalculator = () => {
  const [expInput, setExpInput] = useState('');
  const inputRef = useRef(null);

  const editExpInput = (value) => {
    inputRef.current.focus();
    console.log(value);
    if (value === '←')
      setExpInput((prev) => prev.substring(0, prev.length - 1));
    else setExpInput((prev) => prev + value);
  };

  console.log('expInput', expInput);
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />

        <div className='skewCalc-container'>
          <h1>Enter the expressions using the Buttons below</h1>

          <input ref={inputRef} placeholder='Enter here' value={expInput} />
          <div className='skewCalc-container-buttons'>
            <div className='skewCalc-container-buttons-left'>
              <button
                name='1'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                1
              </button>
              <button
                name='2'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                2
              </button>
              <button
                name='3'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                3
              </button>

              <button
                name='4'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                4
              </button>
              <button
                name='5'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                5
              </button>
              <button
                name='6'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                6
              </button>

              <button
                name='7'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                7
              </button>
              <button
                name='8'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                8
              </button>
              <button
                name='9'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                9
              </button>
              <button
                name='.'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                .
              </button>
              <button
                name='0'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                0
              </button>
              <button
                name='←'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                ←
              </button>
            </div>
            <div className='skewCalc-container-buttons-right'>
              <button
                name='A'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                A
              </button>
              <button
                name='T'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                T
              </button>
              <button
                name='G'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                G
              </button>

              <button
                name='C'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                C
              </button>
              <button
                name='M'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                M
              </button>
              <button
                name='X'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                X
              </button>

              <button
                name='T'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                T
              </button>
              <button
                name='Y'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                Y
              </button>
              <button
                name='W'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                W
              </button>
            </div>
          </div>

          <div className='skewCalc-container-specialbuttons'>
            <div className='skewCalc-container-specialbuttons-left'>
              <button
                name='+'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                +
              </button>
              <button
                name='-'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                -
              </button>
              <button
                name='*'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                *
              </button>
            </div>
            <div className='skewCalc-container-specialbuttons-right'>
              <button
                name='/'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                /
              </button>
              <button
                name='('
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                (
              </button>
              <button
                name=')'
                onClick={(e) => {
                  editExpInput(e.target.name);
                }}
              >
                )
              </button>
            </div>
          </div>

          <button
            className='skewCalc-container-search-button'
            name='←'
            onClick={(e) => {
              
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkewCalculator;
