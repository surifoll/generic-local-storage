import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

export const useLocalStorageContext = () => useContext(LocalStorageContext);

export const LocalStorageProvider = ({ children }) => {
    const [storedValues, setStoredValues] = useState({});

    useEffect(() => {
        const handleStorageChange = (event) => {
            const { key, newValue } = event;
            setStoredValues((prevValues) => ({
                ...prevValues,
                [key]: newValue ? JSON.parse(newValue) : null,
            }));
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

    return (
        <LocalStorageContext.Provider value={{ storedValues, setValue }}>
            {children}
        </LocalStorageContext.Provider>
    );
};
