

import React, { useState } from 'react';
import useLocalStorage, { useLocalStorageContext } from '../contexts/LocalStorageContext';

function SetLocalStorageValue() {
    const { setValue } = useLocalStorageContext();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setValue('myKey', inputValue);
        setInputValue('');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <input
                type="text"
                placeholder="Enter value"
                value={inputValue}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
            />
            <button onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                Save to localStorage
            </button>
        </div>
    );
}


export default SetLocalStorageValue;



