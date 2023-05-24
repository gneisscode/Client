import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import VerificationCodePage from './pages/VerificationCodePage'
import Error404 from './pages/Error404';
import ChangeSuccess from './features/Auth/ChangePassword/ChangeSuccess';
import './App.css';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import DashboardPage from './pages/DashboardPage';
import Declined from './features/Dashboard/Dashboard/loans/Declined';
import Generated from './features/Dashboard/Dashboard/loans/Generated';
import Refunded from './features/Dashboard/Dashboard/loans/Refunded';
import Pending from './features/Dashboard/Dashboard/loans/Pending';
import BorrowersData from './features/Dashboard/BorrowersData/InputData/BorrowersData';
import BorrowerEligibility from './features/Dashboard/BorrowersData/Eligibility/BorrowerEligibility';
import SendStatus from './features/Dashboard/BorrowersData/Eligibility/SendStatus';
import LoanApplications from './features/Dashboard/Dashboard/LoanApplications';
import History from './features/Dashboard/History';
import Admin from './features/Dashboard/Admin/Admin';
import AddAdmin from './features/Dashboard/Admin/AddAdmin';
import Help from './features/Dashboard/Help';

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<LandingPage />} path="/services" />
      <Route element={<ContactUs />} path="/contact" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignUpPage />} path="/signup" />
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<Declined />} path="/loans-declined" />
      <Route element={<Generated />} path="/loans-generated" />
      <Route element={<Refunded />} path="/loans-refunded" />
      <Route element={<Pending />} path="/loans-pending" />
      <Route element={<BorrowersData />} path="/borrower-data" />
      <Route element={<BorrowerEligibility />} path="/borrower-eligibility" />
      <Route element={<SendStatus />} path="/send-status" />
      <Route element={<LoanApplications />} path="/loan-applications" />
      <Route element={<History />} path="/history" />
      <Route element={<Admin />} path="/admin" />
      <Route element={<AddAdmin />} path="/add-admin" />
      <Route element={<Help/>} path="/help" />
      <Route element={<ChangePasswordPage />} path="/change-password" />
      <Route element={<ForgotPasswordPage />} path="/forgot-password" />
      <Route element={<VerificationCodePage />} path="/verify" />
      <Route element={<Error404 />} path="/error" />
      <Route element={<ChangeSuccess />} path="/success" />
    </Routes>
  );
}

export default App;
