import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
export const Reg = () => {

    
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
      <div class="d-flex aligns-items-center justify-content-center card text-center w-100">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">Please</h5>
          <p class="card-text">Select Your Type</p>
          <button className="btn btn-primary">
            <Link to="/user/reg" style={{ color: `white` }}>
              Registration As User
            </Link>
          </button>
          <button className="btn btn-primary">
            <Link to="/servicepro/reg" style={{ color: `white` }}>
              Registration As Service Provider
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
