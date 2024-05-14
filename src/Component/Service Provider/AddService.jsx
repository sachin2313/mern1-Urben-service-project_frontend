import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

export const AddService = () => {
    const {register, handleSubmit} = useForm();
    const [categories, setcategories] = useState([])
    const [subcategory, setsubcategory] = useState([])
    const [type, settype] = useState([])
    const submitHandler = async(data) => {
      //console.log('Data', data);
      const id = localStorage.getItem("id")
      const dataObj = Object.assign(data, {serviceprovider: id})
      if(id!==undefined){
        try {
          var formData = new FormData();
          formData.append("servicename",data.servicename);
          formData.append("myImage",data.myImage[0]);
          formData.append("category",data.category);
          formData.append("subcategory",data.subcategory);
          formData.append("type",data.type);
          formData.append("fees",data.fees);
          formData.append("area",data.area);
          formData.append("city",data.city);
          formData.append("state",data.state);
          formData.append("serviceprovider",id)

          const res = await axios.post(
            "http://localhost:4000/service/service",
            formData
          );
          console.log(res.data.data);
          console.log(data);  
        } catch (error) {
          
        }
        
      }
    }

    const loadType = async () => {
      const res = await axios.get(
        "http://localhost:4000/type/type"
      );
      console.log(res.data.data);
      settype(res.data.data);
    };

    const loadSubCategories = async () => {
      const res = await axios.get("http://localhost:4000/subcategory/subcategory");
      console.log(res.data.data);
      setsubcategory(res.data.data);
    };
  const loadCategories = async() => {

      const res = await axios.get('http://localhost:4000/category/category');
      console.log(res.data.data);
      setcategories(res.data.data);

  }
  useEffect(() => {
    
    loadCategories();
    loadSubCategories();
    loadType();
  }, [])
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
      <div className="card card-plain" style={{ width: 700, marginLeft: 250 }}>
        <div className="card-header">
          <h4 className="font-weight-bolder text-center">Add service</h4>
        </div>
        <div className="card-body">
          <form role="form" onSubmit={handleSubmit(submitHandler)}>
            <label className="form-label">Service Name</label>
            <div className="input-group input-group-outline mb-3">
              <input
                placeholder="Enter Your Service Name"
                className="form-control"
                type="text"
                {...register("servicename")}
              />
            </div>
            <label className="form-label">Category</label>
            <div className="input-group input-group-outline mb-3">
              <select className="form-control" {...register("category")}>
                <option>SELECT CATEGORY</option>
                {categories?.map((cat) => {
                  return (
                    <>
                      <option value={cat._id}>{cat.name}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <label className="form-label">Subcategory</label>
            <div className="input-group input-group-outline mb-3">
              <select className="form-control" {...register("subcategory")}>
                <option>SELECT SUBCATEGORY</option>
                {subcategory?.map((subcat) => {
                  return (
                    <>
                      <option value={subcat._id}>{subcat.name}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <label className="form-label">Type</label>
            <div className="input-group input-group-outline mb-3">
              <select className="form-control" {...register("type")}>
                <option>SELECT TYPE</option>
                {type?.map((type) => {
                  return (
                    <>
                      <option value={type._id}>{type.name}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <label className="form-label">Fees</label>
            <div className="input-group input-group-outline mb-3">
              <input
                placeholder="Enter Your Fees"
                className="form-control"
                type="text"
                {...register("fees")}
              />
            </div>
            <label className="form-label">Area</label>
            <div className="input-group input-group-outline mb-3">
              <input
                placeholder="Enter Your Area"
                className="form-control"
                type="text"
                {...register("area")}
              />
            </div>
            <label className="form-label">City</label>
            <div className="input-group input-group-outline mb-3">
              <input
                placeholder="Enter Your City"
                className="form-control"
                type="text"
                {...register("city")}
              />
            </div>
            <label className="form-label">State</label>
            <div className="input-group input-group-outline mb-3">
              <input
                placeholder="Enter Your State"
                className="form-control"
                type="text"
                {...register("state")}
              />
            </div>
            <label className="form-label">Upload Image</label>
            <div className="input-group input-group-outline mb-3">
              <input
                className="form-control"
                type="file"
                {...register("myImage")}
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
    </>
  );
}
