import React, { useState } from 'react';

// create context---------
export const SettingsContext = React.createContext()

// create provider
function SettingsProvider({ children }){
  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('kenya@codefellows.com');
  const [staff, setStaff] = useState([
    {name: 'Kenya', position: 'instructor'},
  ])

  // this will be the SettingsContext STATE
  const values = {
    title,
    email,
    staff,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
