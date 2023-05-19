import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import VerificationCodePage from './pages/VerificationCodePage'
import Error404 from './pages/Error404';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignUpPage />} path="/signup" />
      <Route element={<ChangePasswordPage />} path="/change-password" />
      <Route element={<ForgotPasswordPage />} path="/forgot-password" />
      <Route element={<VerificationCodePage />} path="/verify" />
      <Route element={<Error404 />} path="/error" />
    </Routes>
  );
}

export default App;
