import React, { useEffect, useState } from 'react';

// create context
export const SettingsContext = React.createContext();

// create a provider
function SettingsProvider({ children }){
  // we will use the setters tomorrow!
  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('kenya@codefellows.com');
  const [staff, setStaff] = useState([
    {name: 'Kenya', position: 'Instructor'},
  ])

  // we can "do the thing here" to make calculations etc
  // useReducer to manage state 
  const addStaff = (newMember) => {
    setStaff([...staff, newMember]);
  }

   // Function to save settings in localStorage
   const saveLocalStorage = () => {
    localStorage.setItem('pageItems', JSON.stringify(+pageItems)); // Convert pageItems to a number using '+'
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
  };

  // context is THIS object
  const values = {
    title,
    email,
    staff,
    setTitle,
    setEmail,
    addStaff,
    sort,
    setSort,
    saveLocalStorage,
  };

 // useEffect hook to load settings from localStorage when the component mounts
 useEffect(() => {
  const localPageItems = localStorage.getItem('pageItems');
  console.log('my local page items', localPageItems);
  const localShowCompleted = localStorage.getItem('showCompleted');
  console.log('my local show completed', localShowCompleted);
  const localSort = localStorage.getItem('sort');
  console.log('my local sort', localSort);
  // Check if localPageItems exists and update the state variable if true
  if (localPageItems) {
    setPageItems(JSON.parse(localPageItems)); // Convert the stored string back to a number using JSON.parse()
  }
  // Check if localShowCompleted exists and update the state variable if true
  if (localShowCompleted) {
    setShowCompleted(JSON.parse(localShowCompleted));
  }
  // Check if localSort exists and update the state variable if true
  if (localSort) {
    setSort(JSON.parse(localSort));
  }
}, []); // The empty dependency array ensures the effect runs only once when the component mounts
return (
  <SettingsContext.Provider value={values}>
    {children}
  </SettingsContext.Provider>
);
}
export default SettingsProvider;
