import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {useEffect, useState} from "react";

import { HomeScreen, LoginScreen, SignupScreen, ProfileScreen, GroupScreen, CreatePostScreen } from "./Screens";
import { MainLayout } from "./Layout";

import "./style.sass";

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
        <MainLayout>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component={SignupScreen} />
          <Route exact path="/profile/:id" component={ProfileScreen} />
          <Route exact path="/group/:id" component={GroupScreen} />
          <Route exact path="/createpost" component={CreatePostScreen} />
          <Route exact path="/post:id" component={PostDetailScreen} />
          <Route>
            <Redirect to="/" />
          </Route>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
