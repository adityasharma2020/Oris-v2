import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './SearchSequence.scss';
import { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import FileInput from '../../components/fileInput/FileInput';

const SearchSequence = () => {
  const [searchInput, setSearchInput] = useState('');
  const [result, setResult] = useState({
    totalMatches: null,
    exactMatches: null,
  });
  const [loading, setLoading] = useState(false);
  const [allIndexes, setAllIndexes] = useState([]);

  const { currentFile } = useContext(DataContext);

  const handleSearch = () => {
    const pattern = new RegExp(searchInput, 'g');
    const matches = currentFile.match(pattern);

    if (matches && searchInput) {
      setResult((prev) => ({ ...prev, totalMatches: matches.length }));
      console.log(
        `Found ${matches.length} occurrences of the pattern in the text!`
      );
    } else {
      alert('Pattern not found in the text.');
      setResult((prev) => ({ ...prev, totalMatches: 0 }));
    }
  };

  function asyncFunction(pattern, data) {
    return new Promise(function (resolve, reject) {
      let match;
      let indexes = [];
      while ((match = pattern.exec(data))) {
        indexes.push(match.index);
      }
      resolve(indexes);
    });
  }

  const handleFindAllIndex = () => {
    const pattern = new RegExp(searchInput, 'g');

    setLoading(true);
    if (searchInput) {
      asyncFunction(pattern, currentFile)
        .then(function (result) {
          console.log('then', result);
          setAllIndexes(result);
        })
        .catch(function (error) {
          console.log('catch');
          console.error('An error occurred:', error);
        })
        .finally((e) => {
          console.log('finally');
          setLoading(false);
        });
    } else {
      alert('No index found');
      setAllIndexes([]);
    }
  };
  console.log(loading);
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {currentFile ? (
          <div className='searchSequence-container'>
            <h1>Enter pattern to search</h1>
            <input
              onChange={(e) => setSearchInput(e.target.value.toUpperCase())}
              placeholder='Enter here'
              value={searchInput}
            />
            <p>
              Enter A, G, C, T or R:Purine, Y:Pyrimidine, W: Weak, S: Strong, M:
              Amino, K: Keto, X: Any Base
            </p>
            <button
              className='searchSequence-container-search-button'
              onClick={handleSearch}
            >
              Search
            </button>

            {result.totalMatches ? (
              <>
                {' '}
                <p className='searchSequence-container-result'>
                  Searched for the string "{searchInput}" with exactly 0
                  mismatches:
                </p>{' '}
                <div className='table-container  '>
                  <table className='searchSequence-container-table'>
                    <tr>
                      <th>Total Matches</th>
                      <th>Exact Matches</th>
                    </tr>
                    <tr>
                      <td>{result.totalMatches}</td>
                      <td>{result.totalMatches}</td>
                    </tr>
                  </table>
                </div>
                <button
                  className='searchSequence-container-search-button margin-top'
                  onClick={handleFindAllIndex}
                >
                  Find All Index
                </button>
                {loading ? (
                  <p>Loading... </p>
                ) : allIndexes.length > 0 ? (
                  <div className='table-container  custom-height'>
                    {' '}
                    <table className='searchSequence-container-table'>
                      <tr>
                        <th>Serail Number</th>
                        <th>Index at </th>
                      </tr>
                      {allIndexes.map((index, sn) => (
                        <tr key={sn}>
                          <td>{sn + 1}</td>
                          <td>{index}</td>
                        </tr>
                      ))}
                    </table>
                  </div>
                ) : (
                  <></>
                )}
              </>
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
};

export default SearchSequence;
