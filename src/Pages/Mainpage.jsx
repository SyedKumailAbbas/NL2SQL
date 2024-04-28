import React, { useState } from 'react';

const ConverterPage = () => {
  const [inputPhrase, setInputPhrase] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');
  const [history, setHistory] = useState([]);

  const handleConvert = () => {
    // Logic to convert input phrase to SQL query
    // For demonstration, let's just echo the input as SQL query
    setSqlQuery(inputPhrase);
    setHistory(prevHistory => [...prevHistory, inputPhrase]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-indigo-200 overflow-hidden flex justify-center items-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="w-1/2 mr-4 bg-gray-200 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Enter English Phrase</h2>
            <textarea
              className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-200"
              placeholder="e.g: I want all employees data from employees table"
              value={inputPhrase}
              onChange={(e) => setInputPhrase(e.target.value)}
            ></textarea>
          </div>
          <div className="w-1/2 ml-4 bg-gray-300 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">SQL Query Output</h2>
            <textarea
              className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono bg-gray-300"
              readOnly
              placeholder="SELECT * FROM EMPLOYEES"
              value={sqlQuery}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">History</h2>
            <div className="overflow-y-auto max-h-40 border border-gray-300 rounded-md p-2">
              {history.map((item, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;
