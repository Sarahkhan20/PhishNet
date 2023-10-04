import React, { useState } from 'react';
import male from './male.png';

const App = () => {
  const gradientColors = [
    '#67E0DD',
    '#A6D8DF',
    '#C5E8E2',
    '#94BBDF',
    '#DBDAE0',
    '#FAE8E1',
  ];

  const [scanning, setScanning] = useState(false);
  const [scanMessages, setScanMessages] = useState([]);

  const inputContainerStyle = {
    position: 'relative',
    width: '100%',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  };

  const scanButtonStyle = {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    padding: '20px',
    width: '100px', // Fixed width
    fontSize: '16px',
    borderRadius: '0 5px 5px 0',
    border: 'none',
    background: '#005A7B',
    color: '#FFF',
    cursor: 'pointer',
  };

  const scanMessagesStyle = {
    marginTop: '10px',
    color: '#005A7B',
    textAlign: 'left',
  };

  const containerStyle = {
    background: '#E0E0E0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: '1',
    boxSizing: 'border-box',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientColors.join(',')})`,
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const quoteStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '3rem',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const handleScan = () => {
    setScanning(true);
    setScanMessages([]);

    // Simulate scanning steps with timeouts
    const scanSteps = [
      'Scanning the domain name...',
      'Checking the SSL certificate...',
      'Analyzing potential threats...',
    ];

    scanSteps.forEach((step, index) => {
      setTimeout(() => {
        setScanMessages((prevMessages) => [...prevMessages, step]);
      }, index * 2000); // Adjust the delay as needed
    });

    // Finish scanning after all steps are completed
    setTimeout(() => {
      setScanning(false);
    }, scanSteps.length * 2000 + 1000); // Adjust the delay as needed
  };

  return (
    <div style={gradientStyle}>
      <div style={contentStyle}>
        <div style={quoteStyle}>
          <div style={quoteStyle}>
            Guardians of the Net: Where Safety Meets Cyber.
            <div>
              PhishNet - Your Shield Against Phishing Threats in Real-Time.
            </div>
          </div>
          <div style={inputContainerStyle}>
            <input type="text" placeholder="Type something..." style={inputStyle} />
            <button onClick={handleScan} style={scanButtonStyle} disabled={scanning}>
              {scanning ? 'Scanning...' : 'Scan'}
            </button>
          </div>
          {scanning && (
            <div style={scanMessagesStyle}>
              {scanMessages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </div>
          )}
        </div>
        <div style={containerStyle}>
          <img src={male} alt="" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </div>
    </div>
  );
};

export default App;