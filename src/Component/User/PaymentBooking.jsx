import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PaymentBooking = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const [payment, setpayment] = useState([])
    const {id} = useParams()
    const validationSchema = {
        cardname:{
            required:{
                value: true,
                message: "card name is required.."
            },
            minLength:{
                value:3,
                message: "card name should have atleast 3 characters"
            }
        },
        cardnumber:{
            required:{
                value:true,
                message:"Card number is required."
            },
            pattern:{
                value:/^[0-9]{16}$/,
                message:"Please enter a valid Card Number."
            }
        },
        cvv: {
            required: {
              value: true,
              message: "CVV code is required.",
            },
            pattern: {
              value: /^[0-9]{3}$/,
              message: "Enter a valid CVV",
            },
        },
        expiryDate:{
            required:{
                value:true,
                message:"Expiration date is required."
            },
            validate:(value)=>{
                let d=new Date();
                let month=d.getMonth()+1;
                if(month<10)
                    month="0"+month;
                else
                    month=month.toString();
                let year=d.getFullYear()%100;
                if(value>month+"/"+(year+10))
                    return true;
                else{
                    return false;
                }
            }
        }
    }
    //alert(id)
    const submitHandler= async(data)=>{
        // alert("caled.....")
        try {
            const obj = {
              id: id,
              status: "Done",
            };
            const res = await axios.put(
              "http://localhost:4000/book/bookStatus/"+id,
              obj
            );
            setpayment(res.data.data)
            toast.success("Payment confirmed successfully!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            console.log(res.data.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
  return (
    <>
      <Helmet>
        <link href="../../assets/css/PaymentBooking.css" rel="stylesheet" />
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

        <title>Payment</title>
      </Helmet>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <div className="card mx-auto">
              <p className="heading">PAYMENT DETAILS</p>
              <form
                className="card-details "
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className="form-group mb-0">
                  <p className="text-warning mb-0">Card Number</p>
                  <input
                    type="text"
                    name="card-num"
                    className={`form-control ${
                      errors.cardnumber ? "is-invalid" : ""
                    }`}
                    placeholder="1234 5678 9012 3457"
                    size={17}
                    id="cno"
                    minLength={19}
                    maxLength={19}
                    {...register("cardnumber", {
                      required: "Card number is required.",
                      pattern: {
                        value: /^[0-9]{16}$/,
                        message: "Please enter a valid Card Number.",
                      },
                    })}
                  />
                  {errors.cardnumber && (
                    <div className="invalid-feedback">
                      {errors.cardnumber.message}
                    </div>
                  )}
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    width="64px"
                    height="60px"
                  />
                </div>

                <div className="form-group pt-2">
                  <div className="row d-flex">
                    <div className="col-sm-4">
                      <p className="text-warning mb-0">Expiration</p>
                      <input
                        type="text"
                        name="exp"
                        className={`form-control ${
                          errors.expiryDate ? "is-invalid" : ""
                        }`}
                        placeholder="MM/YYYY"
                        size={7}
                        id="exp"
                        minLength={7}
                        maxLength={7}
                        {...register("expiryDate", {
                          required: "Expiration date is required.",
                          validate: (value) => {
                            let d = new Date();
                            let month = d.getMonth() + 1;
                            if (month < 10) month = "0" + month;
                            else month = month.toString();
                            let year = d.getFullYear() % 100;
                            if (value > month + "/" + (year + 10)) return true;
                            else {
                              return false;
                            }
                          },
                        })}
                      />
                      {errors.expiryDate && (
                        <div className="invalid-feedback">
                          {errors.expiryDate.message}
                        </div>
                      )}
                    </div>
                    <div className="col-sm-3">
                      <p className="text-warning mb-0">Cvv</p>
                      <input
                        type="password"
                        name="cvv"
                        className={`form-control ${
                          errors.cvv ? "is-invalid" : ""
                        }`}
                        placeholder="●●●"
                        size={1}
                        minLength={3}
                        maxLength={3}
                        {...register("cvv", {
                          required: "CVV code is required.",
                          pattern: {
                            value: /^[0-9]{3}$/,
                            message: "Enter a valid CVV",
                          },
                        })}
                      />
                      {errors.cvv && (
                        <div className="invalid-feedback">
                          {errors.cvv.message}
                        </div>
                      )}
                    </div>
                    <div className="col-sm-5 pt-0">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit(submitHandler)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
