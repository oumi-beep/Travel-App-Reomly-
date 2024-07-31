import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState({});

    const addUser = (username, password, profilePic) => {
        setUsers(prevUsers => ({
            ...prevUsers,
            [username]: { password, profilePic }
        }));
    };

    const getUser = (username) => users[username];

    return (
        <UserContext.Provider value={{ addUser, getUser }}>
            {children}
        </UserContext.Provider>
    );
};
