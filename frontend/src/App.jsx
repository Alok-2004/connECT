import "./module/App.css"
import Header from "./component/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";import PostList from "./component/Postlist";
import { useState } from "react";

function App(){

  const [selectedTab , setSelectedTab] = useState("Create Post")
  
  
  return (
    <>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab }  setSelectedTab = { setSelectedTab} ></Sidebar> 
        <div className="content">
          <Header></Header>

        {
          selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )
        }

          
          <Footer></Footer>
        </div>
      </div>
    </>
  )

}

export default App