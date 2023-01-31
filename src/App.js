import React, { useContext, useEffect } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { HeaderAdmin } from "./components/header/HeaderAdmin";
import { Blog } from "./pages/blog/Blog";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";
import { Context } from "./context/Context";
import { Addmember } from "./pages/member/addmember";
import Contactus from "./pages/contact/contactus";
import program from "./pages/ourprogram/program";
import aboutus from "./pages/about/aboutus";
import Home from "./pages/home/Home";
import { Loginuser } from "./pages/login/loginuser";
import adminuser from "./pages/home/adminuser";
import memberlist from "./pages/member/memberlist";
import { useDispatch, useSelector } from "react-redux";
import { local, token, user } from "./redux/authReducer";
import Payment from "./pages/paymnet/Payment";
import MemebrPaymentList from "./pages/member/MemebrPaymentList";
import { Update } from "@mui/icons-material";
import { UpdateMember } from "./pages/member/UpdateMememr";
import Profile from "./pages/member/Profile";
import ParternPage from "./pages/ParternPage";
import Membership from "./pages/Membership";
import ProgramPage from "./pages/ProgramPage";
import ArchivePage from "./pages/ArchivePage";
import NewsPage from "./pages/NewsPage";

const App = () => {
  //after login
  // const { user } = useContext(Context);
  const dispatch = useDispatch();
  const users = useSelector(user);
  const tokens = useSelector(token);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      dispatch(local(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);
  return (
    <>
      <Router></Router>
      <Router>
        {tokens ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addmember" component={Addmember} />
            <Route exact path="/payment" component={Payment} />

            <Route exact path="/adminuser" component={adminuser} />
            <Route exact path="/blog" component={Blog} />

            <Route exact path="/memberlist" component={memberlist} />
            <Route exact path="/memberlist/:id" component={MemebrPaymentList} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/program" component={program} />
            <Route exact path="/about" component={aboutus} />
            <Route exact path="/membership" component={Membership} />
            <Route exact path="/archive" component={ArchivePage} />
            <Route exact path="/news" component={NewsPage} />

            {/* <Route exact path="/program" component={ProgramPage} /> */}

            <Route exact path="/contactus" component={Contactus} />
            <Route exact path="/post/:id" component={DetailsPages} />
            <Route exact path="/account" component={UpdateMember} />
            <Route exact path="/create" component={Create} />
            <Route exact path="*" component={() => <Redirect to={"/"} />} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/program" component={program} />
            <Route exact path="/contactus" component={Contactus} />

            {/* <Route exact path="/admin" component={Login} /> */}
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={aboutus} />
            <Route exact path="/parterns" component={ParternPage} />
            <Route exact path="/membership" component={Membership} />
            <Route exact path="/archive" component={ArchivePage} />
            <Route exact path="/news" component={NewsPage} />

            {/* <Route exact path="/program" component={ProgramPage} /> */}

            <Route exact path="/loginuser" component={Loginuser} />
            <Route exact path="/login" component={Loginuser} />
            <Route exact path="/register/1234" component={Regsiter} />
            <Route exact path="/addmember" component={Addmember} />
            <Route
              exact
              path="*"
              component={() => <Redirect to={"/login"} />}
            />
          </Switch>
        )}

        <Footer />
      </Router>
    </>
  );
};
export default App;
