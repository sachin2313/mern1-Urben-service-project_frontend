import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate();
  console.log("Data from user Location...",location?.state?.email);
  const { register, handleSubmit } = useForm({
    defaultValues:{
      email:location?.state?.email
    }
  });

  const submitHandler = async (data) => {
    console.log(data);
    try {
      const dataToSend = {
        email: data.email,
        password: data.password,
        otp: data.otp,
        time: new Date().getTime(),
      };
      const res = await axios.post(
        "http://localhost:4000/user/user/resetpassword",
        dataToSend
      );
      if (res.data.flag == 1) {
        toast.success("Password Changed Successfully...!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        alert("Password Reset Failed...");
        // toast.error("Password Reset Failed...!", {
        //   position: "top-center",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    } catch (error) {
      console.log(error);
      toast.error("OTP is Expired...!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div>
        <div className="container-fluid py-5 ">
          <div className="card me-12 ms-12 col-lg-7">
            <div className="mt-5">
              <div className="d-flex">
                <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-xl mt-n3 ms-4">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <h4 className=" mb-2 ms-3 text-dark text-bold">
                  Change Password
                </h4>
              </div>
            </div>
            <br />
            <div className="card-body ms-5 me-5" style={{ padding: `12px` }}>
              <form onSubmit={handleSubmit(submitHandler)}>
                <label className="form-label" style={{ margin: `3px` }}>
                  Email
                </label>
                <div className="input-group input-group-outline my-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="abc12@gmail.com"
                    {...register("email")}
                    disabled
                  />
                </div>
                <br />
                <label className="form-label" style={{ margin: `3px` }}>
                  OTP
                </label>
                <div className="input-group input-group-outline my-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your OTP"
                    {...register("otp")}
                  />
                </div>
                <br />
                <label className="form-label" style={{ margin: `3px` }}>
                  Password
                </label>
                <div className="input-group input-group-outline my-0">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password,here...!!"
                    {...register("password")}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  style={{ color: `white` }}
                >
                  Change Password & Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};