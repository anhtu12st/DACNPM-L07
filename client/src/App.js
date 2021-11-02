import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeScreen, LoginScreen, SignupScreen } from "./Screens";
import { MainLayout } from "./Components";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={HomeScreen} />
          {/* <Route path="/login" component={LoginScreen} /> */}
          <Route>
            <Redirect to="/" />
          </Route>
        </MainLayout>
<<<<<<< HEAD

        <Route exact path="/Login" component={LoginScreen} />
        <Route exact path="/Signup" component={SignupScreen} />
=======
>>>>>>> a6dd383232542dbd67db93b04e2e1d46b8ecd65b
      </Switch>
    </BrowserRouter>
  )
}

export default App;
