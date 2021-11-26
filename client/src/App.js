import {useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeScreen, LoginScreen, SignupScreen, ProfileScreen, GroupScreen, CreatePostScreen, PostDetailScreen } from "./Screens";
import Layout from "./Layout";

import "./style.sass";
import { UserProvider } from "./Contexts/UserContext";
import {createPost, getPost} from "./Services/Post";
import {downvotePost, upvotePost} from "./Services/Vote";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [postsData, setPostsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost()
      setPostsData(data)
    }
    fetchData()
  }, [])

  const handleVote = async (postId, value) => {
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
    if (group < 0) {
      alert('Chọn nhóm để đăng bài')
      return;
    }
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
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Layout isLoggedIn={isLoggedIn} logOut={LogOut}>
            <Route exact path="/">
              <HomeScreen isLoggedIn={isLoggedIn} handleVote={handleVote} postsData={postsData}/>
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
    </UserProvider>
  )
}

export default App;
