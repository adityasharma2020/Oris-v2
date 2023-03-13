import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const FileInput = ({ className }) => {
  const { dispatch } = useContext(DataContext);

  const fileUpload = (e) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      const atgcText = text.split('genome')[1].replace(/[^a-z]/gi, '');
      // const windowSize = 50000;
      // const step = 10000;

      // function processSubstrings(inputString, operation, constantNumber,step) {
      //   let startIndex = 0;
      //   let endIndex = inputString.length;

      //   let results = [];

      //   for (let i = startIndex; i < endIndex; i += step) {
      //     let substring = inputString.substring(i, i + constantNumber);
      //     let newSubstring = operation(substring);
      //     let newIndex = i + constantNumber;
      //     results.push({ substring: newSubstring, index: newIndex });
      //   }

      //   return results;
      // }
      // function findValueOfATCG(substring){

      // }

      // const results = processSubstrings(atgcText,findValueOfATCG, windowSize,step);

      dispatch({ type: 'SET_DATA', payload: atgcText });
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <input type='file' id='file' onChange={fileUpload} />
    </div>
  );
};

export default FileInput;
