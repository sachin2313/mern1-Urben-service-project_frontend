import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';
import { Helmet } from 'react-helmet';
export const BookService = () => {

  const [service, setservice] = useState([])


  const fetchAllService = async() =>{
    try {
      const res = await axios.get("http://localhost:4000/service/service")
      console.log(res.data.data)
      setservice(res.data.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const searchService = async(e) =>{
    try {
      const res = await axios.get("http://localhost:4000/service/filterService",{
        params:{
          name: e.target.value,
        },
      })
      console.log("res in searchService", res.data.data);
      setservice(res.data.data)
    } catch (error) {
      setservice([])
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchAllService();
  }, [])

  
  return (
    <>
      <Helmet>
        <link href="../../assets/css/BookSerImg.css" rel="stylesheet" />
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

        <title>Book Service</title>
      </Helmet>
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3 input-group-outline mb-3 m-3 border border-primary">
              <input
                type="text"
                className="form-control input-text"
                placeholder="Search services...."
                aria-label="Recipient's username"
                onChange={(e) => {
                  searchService(e);
                }}
                aria-describedby="basic-addon2"
              />
              <i className="fa fa-search m-3 border" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mt-5"
        style={{ marginLeft: `5%`, maxWidth: `80%` }}
      >
        <h1 className="mb-4">Book a Service</h1>
        <div className="row">
          {service.map((service) => (
            <div key={service._id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={service.imageUrl}
                  className="card-img-top"
                  alt={`Card ${service._id}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{service?.servicename}</h5>
                  <p className="card-text">{service?.category?.name}</p>
                  <p className="card-text">{service?.type?.name}</p>
                  <p className="card-text">{service?.area}</p>
                  <p className="card-text">{service?.city}</p>
                  <p className="card-text">{service?.state}</p>
                  <p className="card-text">{service?.fees}</p>
                  <button className="btn btn-primary">
                    <Link
                      to={`/user/detailService/${service._id}`}
                      style={{ color: `white` }}
                    >
                      BOOK NOW
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
