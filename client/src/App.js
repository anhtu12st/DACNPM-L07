import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { HomeScreen, LoginScreen, ProfileScreen, SignupScreen } from "./Screens";
import Layout from "./Layout";

import "./style.sass";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const LoggedIn = () => {
    setLoggedIn(true)
  }
  const LogOut = () => {
    setLoggedIn(false)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Layout isLoggedIn={isLoggedIn} logOut={LogOut}>
          <Route exact path="/">
            <HomeScreen isLoggedIn={isLoggedIn}/>
          </Route>
          <Route exact path="/login">
            <LoginScreen LoggedIn={LoggedIn}/>
          </Route>
          <Route exact path="/signup">
            <SignupScreen SignedUp={LoggedIn}/>
          </Route>
          <Route exact path="/profile/:id" component={ProfileScreen} />
          {/* <Route exact path="/group/:id" component={GroupScreen} />
          <Route exact path="/createpost" component={CreatePostScreen} />
          <Route exact path="/post:id" component={PostDetailScreen} /> */}
          <Route>
            <Redirect to="/" />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
