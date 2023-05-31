import React, { createContext, useState } from 'react';

const BikesContext = createContext();

const BikesProvider = ({ children }) => {
  const [bikes, setBikes] = useState([]);
  const [mobile, setMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <BikesContext.Provider value={{ bikes, setBikes, mobile, setMobile, loading, setLoading}}>
      {children}
    </BikesContext.Provider>
  );
};

export { BikesProvider, BikesContext };