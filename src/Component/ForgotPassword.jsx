import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const submitHandler = async(data) => {
    try {
      const res = await axios.post("http://localhost:4000/user/user/isuserexist",data)
      if(res.data.flag == 1){
        console.log("User Exist...!!", res.data.data.email);
        navigate("/resetpassword",{state :{email:res.data.data.email}})
      }
      
    } catch (error) {
      toast.error("Invalid Email...!!", {
        position: "top-center",
        autoClose: 1000,
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
        autoClose={1000}
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
                <h4 className=" mb-2 ms-3 text-dark text-bold">Verification Required</h4>
              </div>
            </div>
            <br />
            <div className="card-body ms-5 me-5" style={{ padding: `12px` }}>
              <form onSubmit={handleSubmit(submitHandler)}>
                <p className="text-bold">Please , Enter Your Email...!!</p>
                <label className="form-label" style={{ margin: `3px` }}>
                  Email
                </label>
                <div className="input-group input-group-outline my-0">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="abc12@gmail.com"
                    {...register("email")}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  style={{ color: `white` }}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};