import React, { useState } from "react";
import { addPost } from "../Service/api";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rightbar from "./Rightbar";

const initialValue = {
  title: "",
  type: "",
  description: "",
};

const AddPost = () => {
  const [post, setPost] = useState(initialValue);
  const { title, type, description } = post;
  let history = useHistory();

  const onValueChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const addPostDetails = async () => {
    await addPost(post);
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h1>Create</h1>
        <h1>A New Posts</h1>
        <div className="actionBtn">
          <button className="active">
            <Link to="/">
              <FontAwesomeIcon icon="home" className="icon" />
              Home
            </Link>
          </button>
          <button className="active">
            <Link to="/dashboard">
              <FontAwesomeIcon icon="desktop" className="icon" />
              Dashboard
            </Link>
          </button>
          <button className="unactive">
            <FontAwesomeIcon icon="pencil-alt" className="icon" />
            Create Posts
          </button>
          <button className="active">
            <Link to="/form">
              <FontAwesomeIcon icon="pencil-alt" className="icon" />
              Form
            </Link>
          </button>
        </div>
      </div>
      <div className="actionDiv">
        <div className="Formdiv">
          <form onSubmit={() => addPostDetails()}>
            <div className="form-group">
              <label className="top">Title:</label>
              <input
                type="text"
                name="title"
                className="form-control highlight"
                value={title}
                onChange={(e) => onValueChange(e)}
                placeholder="Enter the Title"
                required={true}
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <select
                name="type"
                className="form-control highlight"
                value={type}
                onChange={(e) => onValueChange(e)}
                required={true}
              >
                <option value="">Select</option>
                <option value="Technology">Technology</option>
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Creativity">Creativity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                type="text"
                name="description"
                className="form-control highlight"
                value={description}
                onChange={(e) => onValueChange(e)}
                placeholder="Write the Description"
                required={true}
              />
            </div>
            <button type="submit" className="primary">
              <FontAwesomeIcon icon="plus" className="icon" />
              Add Post
            </button>
          </form>
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default AddPost;
