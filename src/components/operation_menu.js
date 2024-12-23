import React, { useState } from 'react';

const OperationMenu = () => {
    const [status, setStatus] = useState('None Selected');

    const handleStart = () => setStatus('Add a new app');
    const handleStop = () => setStatus('Delete Selected');
    const handleReset = () => setStatus('Select All');

    return (
        <div>
            <button onClick={handleStart}>Add a new app</button>
            <button onClick={handleStop}>Delete Selected</button>
            <button onClick={handleReset}>Select All</button>
            <p>Status: {status}</p>
        </div>
    );
};

export default OperationMenu;
