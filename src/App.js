
import './App.css';
import { IDKitWidget } from '@worldcoin/idkit';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <IDKitWidget
        app_id="app_staging_2ac5c88560df081461fdf46b8ea12921" // Replace with your actual app_id
        action="vote"
        signal=""
        action_description="cast your vote"
        onError={onError}
        handleVerify={handleVerify}
        verification_level="device"
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
    </div>
      </header>
    </div>
  );
}

function onError(data) {
  console.error('error:', data);
  // Handle verified user data here
}



function handleVerify(data) {
  console.log('Verification handler:', data);
  
}

export default App;
