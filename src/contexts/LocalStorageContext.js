import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

export const useLocalStorageContext = () => useContext(LocalStorageContext);

export const LocalStorageProvider = ({ children }) => {
    const [storedValues, setStoredValues] = useState({});

    useEffect(() => {
        const handleStorageChange = (event) => {
            const { key, newValue } = event;
            if (key && newValue) {
                try {
                    const parsedValue = JSON.parse(newValue);
                    setStoredValues((prevValues) => ({
                        ...prevValues,
                        [key]: parsedValue,
                    }));
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const setValue = (key, value) => {
        try {
            const valueToStore = typeof value === 'function' ? value(storedValues[key]) : value;
            setStoredValues((prevValues) => ({
                ...prevValues,
                [key]: valueToStore,
            }));
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error setting data to localStorage:', error);
        }
    };


    const syncStoredValues = () => {
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if (key && !storedValues.hasOwnProperty(key)) {
                try {
                    const parsedValue = JSON.parse(window.localStorage.getItem(key));
                    setStoredValues((prevValues) => ({
                        ...prevValues,
                        [key]: parsedValue,
                    }));
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
        }
    };


    useEffect(() => {
        syncStoredValues();
    }, []);

    return (
        <LocalStorageContext.Provider value={{ storedValues, setValue }}>
            {children}
        </LocalStorageContext.Provider>
    );
};
