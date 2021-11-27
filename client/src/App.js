import {useEffect, useRef, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeScreen, LoginScreen, SignupScreen, ProfileScreen, GroupScreen, CreatePostScreen, PostDetailScreen } from "./Screens";
import Layout from "./Layout";

import "./style.sass";
import {useUserContext} from "./Contexts/UserContext";
import {createPost, getPost, getPostGroupFollowing} from "./Services/Post";
import {downvotePost, upvotePost} from "./Services/Vote";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [postsData, setPostsData] = useState([])

  const { isAuthenticated } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      var data = 0
      if (isAuthenticated() )  {data = await getPostGroupFollowing()}
      else {data = await getPost()}
      setPostsData(data.reverse())
    }
    fetchData()
  }, [isAuthenticated])

  const handleVotePost = async (postId, value) => {
    const postIdx = postsData.findIndex(post => post.id === postId)
    if (postIdx < 0)
      return;
    let newVote = 0
    if (value > 0) {
      newVote = await upvotePost(postId)
    }
    else {
      newVote = await downvotePost(postId)
    }
    console.log(newVote)
    let newData = [...postsData]
    newData[postIdx].vote_count = newVote
    setPostsData(newData)
  }

  const LoggedIn = () => {
    setLoggedIn(true)
  }
  const LogOut = () => {
    setLoggedIn(false)
  }

  const handleCreatePost = (group, title, text) => {
    const postContent = {
      title: title,
      text: text,
      group: group
    }
    const createPostAndUpdate = async (postContent) => {
      const newPost = await createPost(postContent);
      setPostsData((posts) => [...posts, newPost])
    }
    createPostAndUpdate(postContent)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Layout isLoggedIn={isLoggedIn} logOut={LogOut}>
          <Route exact path="/">
            <HomeScreen isLoggedIn={isLoggedIn} handleVote={handleVotePost} postsData={postsData}/>
          </Route>
          <Route exact path="/login">
            <LoginScreen LoggedIn={LoggedIn} />
          </Route>
          <Route exact path="/signup">
            <SignupScreen SignedUp={LoggedIn} />
          </Route>
          <Route exact path="/profile/:id" component={ProfileScreen} />
          <Route exact path="/group/:id" component={GroupScreen} />
          <Route exact path="/createpost"
              render={props => <CreatePostScreen {...props} handleCreatePost={handleCreatePost} />}
          />
          <Route
            exact path="/posts/:id"
            render={props => <PostDetailScreen {...props} />}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
