import React from 'react';

function useLocalStorage(localStorageKey, initialValue) {


    const [items, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                let parsedItems = [];
                var localStorageItems = localStorage.getItem(localStorageKey);
                if(!localStorageItems) {
                  localStorage.setItem(localStorageKey, JSON.stringify(initialValue));
                  parsedItems = initialValue;
                } else {
                  parsedItems = JSON.parse(localStorageItems);
                  setItem(parsedItems);
                }
                setLoading(false);
        
            } catch (error) {
                console.log(error);
        setLoading(false);
        setError(true);
            }
        }, 1000);
    }, []);
  
  
  
    const saveItem = (newItems) => {
      var json = JSON.stringify(newItems);
      setItem(newItems);
      localStorage.setItem(localStorageKey, json);
    }
  
    return {items, saveItem, loading, error,};
  }

  export {useLocalStorage};