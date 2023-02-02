import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPosts, editPost } from "../Service/api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rightbar from "./Rightbar";

const initialValue = {
  title: "",
  type: "",
  description: "",
};

const EditPost = () => {
  const [post, setPost] = useState(initialValue);
  const { title, type, description } = post;
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    loadPostDetails();
  }, []);

  const loadPostDetails = async () => {
    const response = await getPosts(id);
    setPost(response.data);
  };

  const editPostDetails = async () => {
    await editPost(id, post);
  };

  const onValueChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h1>Edit</h1>
        <h1>The Posts</h1>
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
          <form>
            <div className="form-group">
              <label className="top">Title:</label>
              <input
                type="text"
                name="title"
                className="form-control highlight"
                value={title}
                onChange={(e) => onValueChange(e)}
                placeholder="Enter the Title"
                required
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <select
                name="type"
                className="form-control highlight"
                value={type}
                onChange={(e) => onValueChange(e)}
                required
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
                required
              />
            </div>
            <button
              type="submit"
              className="primary"
              onClick={() => editPostDetails()}
            >
              <FontAwesomeIcon icon="plus" className="icon" />
              Edit Post
            </button>
          </form>
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default EditPost;
