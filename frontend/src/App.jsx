// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./components/Feed";
import "./index.css";
import Layout from "./hocs/Layout";
import Messages from "./components/Messages/Messages";
import Contacts from "./components/Messages/Contacts";
import Conversation from "./pages/Conversation";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import ResetPasswordConfirm from "./pages/auth/ResetPasswordConfirm";
import Activate from "./pages/auth/Activate";
import FriendsList from "./components/FriendsList";
import Profile from "./components/Profile";

// другая реализация в index router tutorial.jsx (без App.jsx)
function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="friends-list" element={<FriendsList />} />
          </Route>

          <Route path="/messages" element={<Conversation />}>
            <Route path="" element={<Contacts />}>
              <Route index element={<Messages />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/uid/token"
            element={<ResetPasswordConfirm />}
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
