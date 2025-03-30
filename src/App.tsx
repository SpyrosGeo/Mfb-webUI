import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import pb from "./utils";
import { logout } from "./services/auth";
import BranchList from "./components/BranchList/BranchList";
function App() {
  pb.autoCancellation(false);
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);
  const handleLogOut = () => {
    logout();
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="app__container">
          <button onClick={handleLogOut}>Log Out</button>
          <BranchList />
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
