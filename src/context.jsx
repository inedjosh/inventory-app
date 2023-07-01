import React, { createContext, useState } from "react";

// Create the AppContext
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [notification, setNotification] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        notification,
        setNotification,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
