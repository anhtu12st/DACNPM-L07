import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen, LoginScreen, SignupScreen, CreatePostScreen } from "./Screens";
import { MainLayout } from "./Components";
import "./style.sass";
import {useEffect, useState} from "react";

function App() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const res = await fetch('/posts.json')
        return await res.json()
    }

    useEffect( () => {
        const getPosts = async () => {
            const postArr = await fetchPosts()
            setPosts(postArr)
        }
        getPosts()
    }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <HomeScreen posts={posts}/>
        </Route>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/createpost">
          <CreatePostScreen/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
