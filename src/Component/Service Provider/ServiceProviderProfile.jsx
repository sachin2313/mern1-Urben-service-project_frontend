import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const ServiceProviderProfile = () => {
    
  const [serviceprovider, setserviceprovider] = useState([])
  const id = localStorage.getItem('id');
  const fetchServiceProviderData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/serviceprovider/serviceprovider/${id}`);
      console.log(res.data.data);
      setserviceprovider(res.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    fetchServiceProviderData();
  }, []);  
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
      <div
        className="container"
        style={{
          width: `700px`,
          height: `730px`,
          alignContent: `center`,
          justifyContent: `center`,
          textAlign: `center `,
        }}
      >
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Service Provider Profile</div>
                <div className="card-body">
                  <p className="card-text">Username: {serviceprovider.name}</p>
                  <p className="card-text">Email: {serviceprovider.email}</p>
                  <p className="card-text">Phone: {serviceprovider.phone}</p>
                  <Link to="/updateSerProProfile" className="btn btn-success">
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
