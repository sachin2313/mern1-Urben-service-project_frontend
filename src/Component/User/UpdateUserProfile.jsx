import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

export const UpdateUserProfile = () => {
const id = localStorage.getItem("id")
const navigate = useNavigate();
    const {register, handleSubmit, setValue} = useForm();
    const submitHandler = async(data) =>{
        try {
            const res = await axios.put(
              `http://localhost:4000/user/user/${id}`,data
            );
            console.log(res.data.data);
            if (res.status === 201) {
              navigate("/user/profile/");
            } else {
              console.log(
                "Error in updating user data: Unexpected status code",
                res.status
              );
            }
        } catch (error) {
            console.log("Error in updating user data: ",error.message);
            if (error.response) {
              console.log("Server responded with error:", error.response.data);
            }
        }
    }
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/user/user/${id}`);
          const userData = res.data.data;
          setValue("name", userData.name);
          setValue("email", userData.email);
          setValue("phone", userData.phone);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchData();

    }, [id, setValue])
    

  return (
    <div className="container mt-5">
      <div className="card card-plain" style={{ width: 700, marginLeft: 250 }}>
        <div className="card-header">
          <h4 className="font-weight-bolder text-center">User Profile</h4>
        </div>
        <div className="card-body">
          <form role="form" onSubmit={handleSubmit(submitHandler)}>
            <label className="form-label">Name</label>
            <div className="input-group input-group-outline mb-3">
              <input
                className="form-control"
                type="text"
                {...register("name")}
              />
            </div>
            <label className="form-label">Email</label>
            <div className="input-group input-group-outline mb-3">
              <input
                className="form-control"
                type="email"
                {...register("email")}
              />
            </div>
            <label className="form-label">Phone No</label>
            <div className="input-group input-group-outline mb-3">
              <input
                placeholder="Enter Your Area"
                className="form-control"
                type="text"
                {...register("phone")}
              />
            </div>
            <div
              className="text-center"
              style={{ width: 100, marginLeft: 250 }}
            >
              <input type="submit" value="submit" className="btn btn-success" />
              <input type="reset" value="reset" className="btn btn-danger" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
