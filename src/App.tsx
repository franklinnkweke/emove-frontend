import './App.css';
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/forgotPassword";
import CheckEmail from './pages/checkEmail';
import { ResetPassword } from './pages/resetPassword';
import { SuccessPage } from './pages/successPage';


import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import { Layout } from './Layouts/Layout';
import { SignUpPage } from './pages/signUpPage';
import { LoginPage } from './pages/loginPage';
import { DashboardPage } from './pages/dashboardPage';
//import { Navbar } from './components/UserNavbar';
import './styles/dashboard.styles.css'
import { TripDetailsDashboard } from './pages/tripDetailsDashboard';
import { PaymentDashboard } from './pages/paymentDashboard';
import { ViewPaymentMethod } from './pages/viewPaymentMethod';
import { WalletPage } from './pages/walletPage';
import { MoreRoutes } from './components/MoreRoutes';
import { AdminPricingPage } from './pages/AdminPricingPage';
import { AdminDriversPage } from './pages/AdminDriversPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminViewDriversPage } from './pages/AdminViewDriversPage';
import { VerifySignUp } from './pages/VerifySignUp';
import  GoogleAuth  from "./pages/GoogleAuth";

// import tw from "tailwind-styled-components";

function App() { 

  const details = JSON.parse(`${localStorage.getItem('userDetails')}`);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} ></Route>
      <Route path="/signup" element={<SignUpPage />} ></Route>
      <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/auth/google" element={<GoogleAuth />} ></Route>
      <Route path="/users/verify/:token" element={<VerifySignUp />} ></Route>

      <Route path="/forgotpassword" element={
                <ForgotPassword /> }></Route>

      <Route path="/resetPassword/:token" element={details? 
                <ResetPassword /> : <LoginPage />} ></Route>
      <Route path="/checkemail/:email" element={
                <CheckEmail /> }></Route>

      <Route path="/success" element={
                <SuccessPage /> }></Route>

      {/* User Dashboard */}
      <Route path="/user/book_trip" element={details? 
                <DashboardPage /> : <LoginPage />}></Route>
      <Route path="/user/trip_details" element={details? 
                <TripDetailsDashboard /> : <LoginPage />}></Route>
      <Route path="/user/make_payment" element={details? 
                <PaymentDashboard /> : <LoginPage />}></Route>
      <Route path="/user/payment_options" element={details? 
                <ViewPaymentMethod /> : <LoginPage />}></Route>
      <Route path="/user/wallet" element={details? 
                <WalletPage /> : <LoginPage />}></Route>
      <Route path="/user/wallet:token" element={details? 
                <WalletPage /> : <LoginPage />}></Route>
      
      
      

      {/*Admin Dashboard  */}
      {/* Protect admin */}
      <Route path="/admin/pricing" element={true? 
                <AdminPricingPage /> : <LoginPage />}></Route>
      <Route path="/admin/drivers" element={true? 
                <AdminDriversPage /> : <LoginPage />}></Route>
      <Route path="/admin/driver" element={true? 
                <AdminViewDriversPage /> : <LoginPage />}></Route>
      <Route path="/admin/dashboard" element={true? 
                <AdminDashboardPage /> : <LoginPage />}></Route>


      <Route path="/moreroutes" element={details? 
                <MoreRoutes /> : <LoginPage />}></Route>
      
      
     
      {/* <Route path="/login" element={<LoginPage />} ></Route>
      <Route path="/signup" element={<SignupPage />} ></Route> */}
      <Route path="/layout" element={details? 
                <Layout /> : <LoginPage />}></Route>
      <Route path="/*" element={<div>Error! Page Not Found</div>} ></Route>
    </Routes>
  );
}

export default App;
