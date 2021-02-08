import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { useNProgress } from '@tanem/react-nprogress'
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import stories from './components/layout/stories/stories'
import VednorLogin from './components/auth/VednorLogin';
import VednorRegister from './components/auth/VednorRegister';
import CityLanding from './components/layout/City/Landing'


import Landing from "./components/layout/Landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminRoute from './components/private-route/AdminRoute'
import VendorRoute from './components/private-route/VednorRoute';

import categories from './components/layout/Categories/Categories'
import "./App.css";
import{ Reset } from './theme/reset'
import GlobalFonts from './theme/theme';

import vendor from "./components/layout/vendorList/Venue/vendor/vendor";
import vednorPhotos from './components/layout/vendorList/Venue/vendor/photos'
import Contact2 from './components/layout/Contactus/Contact2';
import ContactUS from './components/layout/Contactus/Contact';

import List from './components/layout/vendorList/Venue/List';
import Food from './components/layout/vendorList/Food/List';


//vendor 
import vendorDashboard from './components/vendor/dashboard/dashboard';
import vedndoInformation from './components/vendor/Information/information';
import packages from './components/vendor/packages/packages';

import { ToastContainer, toast } from 'react-toastify';

//admin
import adminDashboard from './components/admin/dashboard/dashboard';
import adminCategory from './components/admin/categories/category';
import adminCities from './components/admin/Cities/city'
import  adminVendor from './components/admin/vendor/vendor'
import  adminSetting from './components/admin/Setting/setting';
import AdminSubcriptions from './components/admin/subcriptions/sub';
import  adminRating   from './components/admin/subcriptions/sub';
import   adminUser from './components/admin/Users/User';
import adminbookinglist from './components/admin/booking/booking'
import coupon from './components/admin/coupan/coupan'
import AdminLogin from "./components/auth/Adminlogin";
import EmailVerify from './components/vendor/Emailverify.js/Emailverfiy'
import additional from './components/vendor/Additional/AdditionalInformation'
import Alert from './components/vendor/Additional/alert/alert'
import VednorRoute from "./components/private-route/VednorRoute";
import photos from "./components/layout/vendorList/Venue/vendor/photos";
import cityprofile from './components/admin/Cities/CityProfile/cityProfile'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
       
       <GlobalFonts />
     
          <Reset/>
         <Alert/>
        <Router>
          <ToastContainer/>
          <div className="App">
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/wedding/:id" component={CityLanding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact  path="/vendor-login"  component={VednorLogin} /> 
            <Route exact  path="/vendor-register"  component={VednorRegister} /> 
            <Route exact path="/Wedding_Modzz-admin" component={AdminLogin} />
           
            <Route exact path="/stories" component={stories} />
            <Route exact path="/categories" component={categories} />
          
           
            <Route exact path="/Contactus" component={ContactUS} /> 
            <Route exact path="/Contactus/new" component={Contact2} /> 
            <Route exact path="/wedding-venues/:id/:vendor" component={List} /> 
            <Route exact path="/wedding-venues/:id" component={vendor} />
            <Route exact path="/photos/:id" component={vednorPhotos} />
            <Route exact path="/food/:id/:vendor" component={Food} /> 
           
            <AdminRoute exact path="/admin/dashboard" component={adminDashboard} /> 
           
            <AdminRoute exact path="/admin/categories" component={adminCategory} /> 
           
            <AdminRoute exact path="/admin/cities" component={adminCities} /> 
            <AdminRoute exact path="/admin/cities/:city" component={cityprofile} />
            <Route exact path="/admin/vendor" component={adminVendor} /> 
            <Route exact path="/admin/setting" component={adminSetting} /> 
            <Route exact path="/admin/subcription-list" component={AdminSubcriptions} /> 
            <Route exact path="/admin/Users-list" component={adminUser} /> 
            <Route exact path="/admin/booking-list" component={adminbookinglist} /> 
            <Route exact path="/admin/coupon" component={coupon} /> 

            <VendorRoute exact path="/vendor/dashboard" component={vendorDashboard} /> 
            <VednorRoute exact path="/verify-account" component={EmailVerify} /> 
            <VednorRoute exact path="/additional-information" component={additional} /> 
            <Route exact path="/vendor/information" component={vedndoInformation} /> 
            <Route exact path="/vendor/packages" component={packages} /> 

            
            
 </div>
        </Router>
    
       
      </Provider>
    );
  }
}
export default App;
