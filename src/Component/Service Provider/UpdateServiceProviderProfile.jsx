import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const UpdateServiceProviderProfile = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const submitHandler = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/serviceprovider/serviceprovider/${id}`,
        data
      );
      console.log(res.data.data);
      if (res.status === 201) {
        navigate("/serviceprovider/profile/");
      } else {
        console.log(
          "Error in updating serviceprovider data: Unexpected status code",
          res.status
        );
      }
    } catch (error) {
      console.log("Error in updating serviceprovider data: ", error.message);
      if (error.response) {
        console.log("Server responded with error:", error.response.data);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/serviceprovider/serviceprovider/${id}`);
        const serviceproviderData = res.data.data;
        setValue("name", serviceproviderData.name);
        setValue("email", serviceproviderData.email);
        setValue("phone", serviceproviderData.phone);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [id, setValue]);
  return (
    <div className="card card-plain" style={{ width: 700, marginLeft: 250 }}>
      <div className="card-header">
        <h4 className="font-weight-bolder text-center">Update Service Provider Profile</h4>
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
          <div className="text-center" style={{ width: 100, marginLeft: 250 }}>
            <input type="submit" value="submit" className="btn btn-success" />
            <input type="reset" value="reset" className="btn btn-danger" />
          </div>
        </form>
      </div>
    </div>
  );
}
