import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import PetList from "../pages/PetList";
import NewPet from "../pages/NewPet";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch(process.env.REACT_APP_API_URL + "/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/login">
            <Login user={user} onLogin={setUser} />
          </Route>
          <Route path="/new">
            <NewPet user={user} />
          </Route>
          <Route path="/">
            <PetList user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
