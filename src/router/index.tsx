import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PhoneInput from "../components/PhoneInput";
import Login from "../components/Login";
import Validate from '../components/ValiPage'
import NewLogin from "../components/NewLogin";
import CodePage from '../components/CodePage'

// 模拟是否登录
const isAuthenticated = false;

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneInput />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/validate"
          element={<Validate />}
        />
         <Route
          path="/newlogin"
          element={<NewLogin />}
        />
         <Route
          path="/code"
          element={<CodePage />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;