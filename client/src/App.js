import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect, useParams } from "react-router-dom";

import { HomeScreen, LoginScreen, SignupScreen, ProfileScreen, GroupScreen, CreatePostScreen, PostDetailScreen } from "./Screens";
import Layout from "./Layout";

import "./style.sass";
import { UserProvider } from "./Contexts/UserContext";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const LoggedIn = () => {
    setLoggedIn(true)
  }
  const LogOut = () => {
    setLoggedIn(false)
  }

  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Layout isLoggedIn={isLoggedIn} logOut={LogOut}>
            <Route exact path="/">
              <HomeScreen isLoggedIn={isLoggedIn} />
            </Route>
            <Route exact path="/login">
              <LoginScreen LoggedIn={LoggedIn} />
            </Route>
            <Route exact path="/signup">
              <SignupScreen SignedUp={LoggedIn} />
            </Route>
            <Route exact path="/profile/:id" component={ProfileScreen} />
            <Route exact path="/group" component={GroupScreen} />
            <Route exact path="/createpost" component={CreatePostScreen} />
            <Route
              exact path="/posts/:id"
              render={props => <PostDetailScreen {...props} />}
            />
            <Route>
              <Redirect to="/" />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;
