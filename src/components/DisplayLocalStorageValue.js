import React from 'react';
import { useLocalStorageContext } from '../contexts/LocalStorageContext';

const key = 'myKey';
function DisplayLocalStorageValue({ title }) {
    const { storedValues } = useLocalStorageContext();
    const value = storedValues[key];
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <p>Value from localStorage ({title} - key: {key}): <strong>{value}</strong></p>
        </div>
    );
}


export default DisplayLocalStorageValue;
