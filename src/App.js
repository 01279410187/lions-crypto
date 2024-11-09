import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Invest1, Hero2, Invest2, Hero3, Invest3, Hero4, Invest4, Hero5, Invest5 } from "./components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Investment from "./components/Investment";
import InvestmentPlan from "./components/InvestmentPlan";
import ProfitCalculator from "./components/ProfitCalculator";
import JoinMethods from "./components/JoinMethods";
import ArbitrageTrading from "./components/ArbitrageTrading";
import Join from "./components/Join";
import LionsWork from "./components/LionsWork";
import HowToJoin from "./components/HowToJoin";
import Referrals from "./components/Referrals";
import HowToConnect from "./components/HowToConnect";
import FAQ from "./components/FAQ";
import Privacy from "./components/Privacy";
import Home from "./components/Home";
import Hero1 from "./components/Hero1";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Modal from "./components/auth/LoginModal";
import ForgetPassword from "./components/auth/ForgetPassword";
import VerifiedOTP from "./components/auth/VerifiyOTP";
import ResetPassword from "./components/auth/ResetPassword";

const user = localStorage.getItem("token");
const App = () => (
  <Routes>
    {/* {user && <Route path="/" exact element={<Home />} />}
    {user && <Route path="/ref/:id" exact element={<Home />} />} */}
    <Route path="/" element={<Modal />} />
    <Route path="/home" exact element={<Home />} />
    {/* <Route path="/Investor" element={<Register />} /> */}
    <Route path="/forgetPassword" element={<ForgetPassword/>} />
    <Route path="/Verified/:id" element ={<VerifiedOTP/>} />
    <Route path="/Reset/:id" element ={<ResetPassword/> } />

      
  </Routes>
  
);

export default App;


