import React, { createContext, useContext, useState } from 'react';
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Palak");
return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "8px" }}>
      <h2>Hello, {user}!</h2>
      <button onClick={() => setUser("New User")}>Change Name</button>
    </div>
  );
};
const App = () => {
  return (
    <UserProvider>
      <div style={{ margin: "50px", fontFamily: "Arial" }}><Profile />
      </div>
    </UserProvider>
  );
};
export default App;
