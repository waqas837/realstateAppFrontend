import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Posts from "./Posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rightbar from "./Rightbar";
import { getPosts } from "../Service/api";
import moment from "moment";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    let response = await getPosts();
    setPosts(response.data);
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h1 className="sidebar-title">Your</h1>
        <h1 className="sidebar-title">All Posts</h1>
        <div className="actionBtn">
          <button className="unactive">
            <FontAwesomeIcon icon="home" className="icon" />
            Home
          </button>
          <button className="active">
            <Link to="/dashboard">
              <FontAwesomeIcon icon="desktop" className="icon" />
              Dashboard
            </Link>
          </button>
          <button className="active">
            <Link to="/add">
              <FontAwesomeIcon icon="pencil-alt" className="icon" />
              Create Posts
            </Link>
          </button>
          <button className="active">
            <Link to="/form">
              <FontAwesomeIcon icon="pencil-alt" className="icon" />
              Form
            </Link>
          </button>
        </div>
      </div>
      <div className="PostDiv">
        <div>
          {posts.map((post) => (
            <div className="card post" key={post.id}>
              <div className="cardHeader">
                <div className="type">{post.type}</div>
                <p className="cardTitle">{post.title}</p>
                <div className="subinfo">
                  <h6>{moment(post.updatedAt).format("LLL")}</h6>
                </div>
              </div>
              <div className="cardBody">
                <p className="description">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Home;
