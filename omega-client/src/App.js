import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import VerificationCodePage from './pages/VerificationCodePage'
import Error404 from './pages/Error404'
import ChangeSuccess from './features/Auth/ChangePassword/ChangeSuccess'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import DashboardPage from './pages/DashboardPage'
import Declined from './features/Dashboard/Dashboard/loans/Declined'
import Generated from './features/Dashboard/Dashboard/loans/Generated'
import Refunded from './features/Dashboard/Dashboard/loans/Refunded'
import Pending from './features/Dashboard/Dashboard/loans/Pending'
import BorrowersData from './features/Dashboard/BorrowersData/InputData/BorrowersData'
import BorrowerEligibility from './features/Dashboard/BorrowersData/Eligibility/BorrowerEligibility'
import SendStatus from './features/Dashboard/BorrowersData/Eligibility/SendStatus'
import LoanApplications from './features/Dashboard/Dashboard/LoanApplications'
import Admin from './features/Dashboard/Admin/Admin'
import AddAdmin from './features/Dashboard/Admin/AddAdmin'
import Help from './features/Dashboard/HelpSupport/Help'
import Settings from './features/Dashboard/Settings/Settings'
import Profile from './features/Dashboard/Dashboard/BorrowersProfile/Profile'
import SavedData from './features/Dashboard/SavedData/SavedData'
import axios from 'axios'
import { Context } from './context/Context'
import Email from './features/Auth/ChangePassword/Email'
import PublicRoute from './components/Auth/PublicRoute'
import PrivateRoutes from './components/Auth/PrivateRoutes'
import Upload from './features/Dashboard/BorrowersData/InputData/Upload'
import Ineligibility from './features/Dashboard/BorrowersData/Eligibility/Ineligibility'
import ChatPage from './pages/ChatPage'
import MessagesPage from './pages/MessagesPage'

function App() {
  axios.defaults.baseURL = `https://nodebt-application.onrender.com/api`
  const { dispatch, isFetching } = useContext(Context);
  const location = useLocation()
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("visitedDashboard");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  };

  useEffect(() => {
    if (location.pathname !== '/services') {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

    useEffect(() => {
      const checkTokenExpiration = () => {
        const token = localStorage.getItem("token");
        const tokenExpiration = localStorage.getItem("tokenExpiration");

        if (!token || !tokenExpiration) {
          handleLogout();
          return;
        }

        const currentTime = Date.now();
        const expirationTime = parseInt(tokenExpiration, 10);

        if (currentTime > expirationTime) {
          handleLogout()
        } 
      };

      const expirationTimer = setInterval(checkTokenExpiration, 1000); // Adjust the interval as needed

      return () => {
        clearInterval(expirationTimer);
      };
    }, []);

  const privateRoutes = [
    {
      path: "/dashboard",
      component: <DashboardPage />,
    },
    {
      path: "/admin",
      component: <Admin />,
    },
    {
      path: "/add-admin",
      component: <AddAdmin />,
    },
    {
      path: "/loans-successful",
      component: <Generated />,
    },
    {
      path: "/loans-declined",
      component: <Declined />,
    },
    {
      path: "/loans-pending",
      component: <Pending />,
    },
    {
      path: "/loans-refunded",
      component: <Refunded />,
    },
    {
      path: "/borrower-data",
      component: <BorrowersData />,
    },
    {
      path: "/upload",
      component: <Upload />,
    },
    {
      path: "/borrower-profile/:id",
      component: <Profile />,
    },
    {
      path: "/borrower-saved-data/:id",
      component: <SavedData />,
    },
    {
      path: "/eligibility/declined/:id",
      component: <Ineligibility />,
    },
    {
      path: "/eligibility/successful/:id",
      component: <BorrowerEligibility />,
    },
    {
      path: "/send-status/:id",
      component: <SendStatus />,
    },
    {
      path: "/loan-applications",
      component: <LoanApplications />,
    },
    {
      path: "/messages",
      component: <MessagesPage />,
    },
    {
      path: "/chat/:id",
      component: <ChatPage />,
    },
    {
      path: "/settings",
      component: <Settings />,
    },
    {
      path: "/help",
      component: <Help />,
    },
  ];

  const publicRoutes = [
    {
      path: '/login',
      component: <LoginPage />,
    },
    {
      path: '/signup',
      component: <SignUpPage />,
    },
    {
      path: '/change-password/:id',
      component: <ChangePasswordPage />,
    },
    {
      path: '/success',
      component: <ChangeSuccess />,
    },
    {
      path: '/forgot-password',
      component: <ForgotPasswordPage />,
    },
    {
      path: '/verify/:id',
      component: <VerificationCodePage />,
    },
    {
      path: '/verification-email',
      component: <Email />,
    },
  ]
  return (
    <>
      <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<LandingPage />} path='/services' />
        <Route element={<ContactUs />} path='/contact' />
        <Route element={<Error404 />} path='*' />

        {publicRoutes.map(({ path, component }, index) => (
          <Route
            key={index}
            element={<PublicRoute>{component}</PublicRoute>}
            path={path}
          />
        ))}

        {privateRoutes.map(({ path, component }, index) => (
          <Route
            key={index}
            element={<PrivateRoutes>{component}</PrivateRoutes>}
            path={path}
          />
        ))}
      </Routes>
    </>
  )
}

export default App
