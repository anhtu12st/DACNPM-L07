import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeScreen, LoginScreen, SignupScreen, ProfileScreen } from "./Screens";
import { MainLayout } from "./Components";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/profile/:id" component={ProfileScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route>
            <Redirect to="/" />
          </Route>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
