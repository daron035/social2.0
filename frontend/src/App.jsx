import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ErrorPage from "./error-page";
import Feed from "./components/Feed";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import "./index.css";
import Layout from "./hocs/Layout";
import Home from "./pages/auth/Home";

// другая реализация в index router tutorial.jsx (без App.jsx)
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />}>
            <Route index element={<Feed />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;