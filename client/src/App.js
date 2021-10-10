import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen, LoginScreen, SignupScreen } from "./Screens";
import { MainLayout } from "./Components";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </MainLayout>

        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignupScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
