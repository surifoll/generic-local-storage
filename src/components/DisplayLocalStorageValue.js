import React from 'react';
import { useLocalStorageContext } from '../contexts/LocalStorageContext';

function DisplayLocalStorageValue() {
    const { storedValues } = useLocalStorageContext();
    const value = storedValues['myKey'];
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <p>Value from localStorage: <strong>{value}</strong></p>
        </div>
    );
}

export default DisplayLocalStorageValue;
