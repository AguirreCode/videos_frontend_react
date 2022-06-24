import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import { ToastContainer, Flip } from "react-toastify";
import EditProfile from "./components/EditProfile";
import ReseatPassword from "./components/ReseatPassword";
import ChangePassword from "./components/ChangePassword";

export function App() {
  const [login, setLogin] = useState({ isLoggedIn: false });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin({ isLoggedIn: true });
    }
  }, []);

  const changeState = () => {
    setLogin({ isLoggedIn: !login.isLoggedIn });
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          isLoggedIn={login.isLoggedIn}
          changeState={changeState}
          logout={logout}
        />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login changeState={changeState} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                localStorage.getItem("token") ? (
                  <Profile />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/all-posts"
              element={
                localStorage.getItem("token") ? (
                  <Posts />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/create-post"
              element={
                localStorage.getItem("token") ? (
                  <CreatePost />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/edit-profile"
              element={
                localStorage.getItem("token") ? (
                  <EditProfile />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/change-password"
              element={
                localStorage.getItem("token") ? (
                  <ChangePassword />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/reseat-password" element={<ReseatPassword />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default App;
