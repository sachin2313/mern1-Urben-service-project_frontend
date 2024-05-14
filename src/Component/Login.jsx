import axios from 'axios';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './assests/css/Loader.css'
import { customLoader } from './customLoader';

export const Login = () => {

  const {register,handleSubmit} = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setrole] = useState("66139467441ecfd4521218c0");
  const navigate = useNavigate();
  
  const submitHandler = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        role === "66139467441ecfd4521218c0"
          ? "http://localhost:4000/user/user/login"
          : "http://localhost:4000/serviceprovider/serviceprovider/login",
        data
      );
      if (res.status === 200) {
        console.log("Login Successfully..");
        console.log(res.data.data);
        localStorage.setItem("id", res.data.data._id);
          if (role === "66139467441ecfd4521218c0") {
            window.location.pathname = "/user/dashboard";
          } else {
            window.location.pathname = "/serviceprovider/dashboard";
          }

        setIsLoading(false)
          
      } 
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="../../assets/css/Loader.css" />
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
      {isLoading ? (
        <customLoader />
      ) : (
        <>
          <div
            className="page-header align-items-start min-vh-100"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
            }}
          >
            <span className="mask bg-gradient-dark opacity-6" />
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                          Sign in
                        </h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <form
                        role="form"
                        className="text-start"
                        onSubmit={handleSubmit(submitHandler)}
                      >
                        <select
                          className="input-group input-group-outline mb-3"
                          value={role}
                          onChange={(e) => setrole(e.target.value)}
                        >
                          <option>SELECT ROLE</option>
                          <option value="66139467441ecfd4521218c0">User</option>
                          <option value="66139467441ecfd4521218c1">
                            Service Provider
                          </option>
                        </select>
                        <label className="form-label">Email</label>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="email"
                            className="form-control"
                            {...register("email")}
                          />
                        </div>
                        <label className="form-label">Password</label>
                        <div className="input-group input-group-outline mb-3">
                          <input
                            type="password"
                            className="form-control"
                            {...register("password")}
                          />
                        </div>
                        <p className="mt-2 text-m text-center ms-11">
                          <Link
                            to="/forgot"
                            className="text-dark text-gradient font-weight"
                          >
                            Forgot Password?
                          </Link>
                        </p>
                        <div className="text-center">
                          <input
                            type="submit"
                            value="Sign In"
                            className="btn bg-gradient-primary w-100 my-4 mb-2"
                          />
                        </div>
                        <p className="mt-4 text-sm text-center">
                          Don't have an account?
                          <Link
                            to="/register"
                            className="text-primary text-gradient font-weight-bold"
                          >
                            Sign up
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
