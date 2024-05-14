import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { ServiceProviderDashboard } from './Component/Service Provider/ServiceProviderDashboard';
import { UserDashboard } from './Component/User/UserDashboard';
import { AddService } from './Component/Service Provider/AddService';
import { MyService } from './Component/Service Provider/MyService';
import { BookService } from './Component/User/BookService';
import { Sidebar } from './Component/Sidebar';
import { ProtectedRoutes } from './Component/hooks/ProtectedRoute';
import { Reg } from './Component/Reg';
import { ServiceProReg } from './Component/Service Provider/ServiceProReg';
import { UserRegistration } from './Component/User/UserRegistration';
import { UpdateService } from './Component/Service Provider/UpdateService';
import { DetailService } from './Component/Service Provider/DetailService';
import { ServiceProviderProfile } from './Component/Service Provider/ServiceProviderProfile';
import { DetailBookService } from './Component/User/DetailBookService';
import { Helmet } from 'react-helmet';
import { MyBooking } from './Component/User/MyBooking';
import { DetailBooking } from './Component/User/DetailBooking';
import { UserProfile } from './Component/User/UserProfile';
import { Logout } from './Component/Logout';
import { UpdateUserProfile } from './Component/User/UpdateUserProfile';
import { UpdateServiceProviderProfile } from './Component/Service Provider/UpdateServiceProviderProfile';
import { ForgotPassword } from './Component/ForgotPassword';
import { ResetPassword } from './Component/ResetPassword';
import PaymentDemo from './Component/User/PaymentDemo';
import UpdateAddress from './Component/User/UpdateAddress';
import { About } from './Component/About';



function App() {
  const path  = window.location.pathname;
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
        />

        <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />

        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          id="pagestyle"
          href="../../assets/css/material-dashboard.css?v=3.0.0"
          rel="stylesheet"
        />
      </Helmet>
      <body className="g-sidenav-show">
        {path === "/" ||
        path === "/login" ||
        path === "/register" ||
        path === "/user/reg" ||
        path === "/servicepro/reg" ||
        path === "" ? null : (
          <Sidebar />
        )}      
        <main className="main-content">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<About />}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path="/forgot" element={<ForgotPassword />}></Route>
              <Route path="/resetpassword" element={<ResetPassword />}></Route>
              <Route path="/register" element={<Reg />}></Route>
              <Route path="/servicepro/reg" element={<ServiceProReg />}></Route>
              <Route path="/user/reg" element={<UserRegistration />}></Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/serviceprovider/dashboard"
                  element={<ServiceProviderDashboard />}
                ></Route>
                <Route path="/logout" element={<Logout />}></Route>
                <Route
                  path="/serviceprovider/addservice"
                  element={<AddService />}
                ></Route>
                <Route
                  path="/serviceprovider/myservice"
                  element={<MyService />}
                ></Route>
                <Route
                  path="/user/dashboard"
                  element={<UserDashboard />}
                ></Route>
                <Route
                  path="/user/bookservice"
                  element={<BookService />}
                ></Route>

                <Route
                  path="/serviceprovider/update/:id"
                  element={<UpdateService />}
                ></Route>
                <Route
                  path="/serviceprovider/details/:id"
                  element={<DetailService />}
                ></Route>
                <Route
                  path="/user/details/:id"
                  element={<DetailBooking />}
                ></Route>
                <Route
                  path="/serviceprovider/profile/"
                  element={<ServiceProviderProfile />}
                ></Route>
                <Route path="/user/profile/" element={<UserProfile />}></Route>
                <Route
                  path="/user/detailService/:id"
                  element={<DetailBookService />}
                ></Route>
                <Route
                  path="/user/BookdetailService/:id"
                  element={<PaymentDemo />}
                ></Route>
                <Route path="/user/mybookings" element={<MyBooking />}></Route>
                <Route
                  path="/updateUserProfile"
                  element={<UpdateUserProfile />}
                ></Route>
                <Route
                  path="/updateSerProProfile"
                  element={<UpdateServiceProviderProfile />}
                ></Route>
                <Route
                  path="/user/paymentdemo/updateaddress/:id"
                  element={<UpdateAddress />}
                ></Route>
              </Route>
            </Routes>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
