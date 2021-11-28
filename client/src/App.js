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

  const handleVotePost = (postId, value) => {
    const postIdx = postsData.findIndex(post => post.id === postId)
    if (postIdx < 0)
      return;
    if (value > 0) {
      upvotePost(postId)
    }
    else {
      downvotePost(postId)
    }
    let newData = [...postsData]
    let voteValue = newData[postIdx].vote_value
    let voteCount = newData[postIdx].vote_count
    if (voteValue === value) {
      if (voteValue === 1) {
        voteCount -= 1
      }
      else {
        voteCount += 1
      }
      voteValue = 0
    }
    else {
      if (voteValue === 0) {
        voteCount += value
      }
      else {
        voteCount += 2 * value
      }
      voteValue = value
    }

    newData[postIdx].vote_value = voteValue
    newData[postIdx].vote_count = voteCount
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
            render={props => <PostDetailScreen {...props} handleVote={handleVotePost} />}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
