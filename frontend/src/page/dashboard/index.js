import "./dashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const handleSignoutClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("Auth:user");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="dashboard__page">
      <div className="header">
        <h1>My website</h1>
        <p>Resize the browser window to see the effect.</p>
      </div>

      <div className="topnav">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Contact</a>
        <a href="#" style={{ float: "right" }} onClick={handleSignoutClick}>
          Đăng xuất
        </a>
      </div>

      <div className="row">
        <div className="leftColumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title decription, Dec, 7, 2017</h5>
            <div className="fakeimg" style={{ height: 200 }}>
              Image
            </div>
            <p>Some text ...</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>

          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title decription, Dec, 7, 2017</h5>
            <div className="fakeimg" style={{ height: 200 }}>
              Image
            </div>
            <p>Some text ...</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="rightColumn">
          <div className="card">
            <h2>About me</h2>
            <div className="fakeimg" style={{ height: 100 }}>
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>

          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg">
              <p>Image</p>
            </div>
            <div className="fakeimg">
              <p>Image</p>
            </div>
            <div className="fakeimg">
              <p>Image</p>
            </div>
          </div>

          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text ...</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default DashBoard;
