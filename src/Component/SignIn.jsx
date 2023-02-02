import axios from "axios";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import "./newfilesign.css";
const Signin = () => {
  const [value, setvalues] = useState("");
  const history = useHistory();
  const signin = async () => {
    try {
      let { data } = await axios.post(
        "http://localhost:8080/posts/signin",
        value
      );
      if (data.success) {
        let email = data.data.email;
        localStorage.setItem("email", email);
        toast.success("You are signin successfully!");
        setTimeout(() => {
          toast("Redirecting to homepage");
          history.push("/");
        }, 2000);
      } else {
        toast.error("Please enter a valid email and password");
      }
    } catch (error) {
      console.log("You have an error", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "white",
        height: "100vh",
        marginTop: -20,
      }}
    >
      <Toaster />
      <h2>
        Get started with <span style={{ color: "rgb(75,148,251)" }}>1MW</span>
      </h2>
      <br />
      <h5>Real state marketing</h5>
      <br />
      <div class="input-container">
        <input
          type="email"
          onChange={(e) => setvalues({ ...value, email: e.target.value })}
        />
        <AiOutlineMail class="icon" />
      </div>
      <br />
      <div class="input-container">
        <input
          type="password"
          onChange={(e) => setvalues({ ...value, password: e.target.value })}
        />
        <FiLock class="icon" />
      </div>
      <br />
      <button onClick={signin} style={{ width: "50%" }}>
        Sign in
      </button>
      <br />
      <p>or singin with</p>
      <div class="circle">G</div>
      <br />
      <a style={{ textDecoration: "underline" }} href="#">
        Terms of conditions
      </a>
    </div>
  );
};

export default Signin;
