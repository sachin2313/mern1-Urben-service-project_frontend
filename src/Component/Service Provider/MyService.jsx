import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const MyService = () => {
  
  const [serviceprovider, setserviceprovider] = useState([])

  const id = localStorage.getItem("id");
  const fetchMyService = async () => {
    try {
      if (id !== undefined || id !== null) {
        const res = await axios.get(
          "http://localhost:4000/service/service/provider/" + id
        );
        console.log(res.data);
        setserviceprovider(res.data.data);
      }  
    } catch (error) {
      alert("no service found")
    }
    
  };

  const deleteService = async(id)=>{
    try {
      const res = await axios.delete(
        "http://localhost:4000/service/service/" + id
      );
      if (res.status == 200) {
        //alert("Delete Successfully");
        fetchMyService();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const searchService = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:4000/service/filterService",
        {
          params: {
            name: e.target.value,
          },
        }
      );
      console.log("res in searchService", res.data.data);
      setserviceprovider(res.data.data);
    } catch (error) {
      setserviceprovider([]);
      console.log(error.response.data);
    }
  };
  


  useEffect(() => {
    if (id != undefined || id !== null) {
      console.log("id.......",id)
      fetchMyService();
      deleteService();
    }
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
      <div className="col-md-12">
        <div className="card strpied-tabled-with-hover">
          <div className="card-header ">
            <h4 className="card-title">My Service</h4>
            <p className="card-category">Here is your added service</p>
          </div>
          <div className="card-body table-full-width table-responsive">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th style={{ justifyContent: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {serviceprovider?.map((ser) => {
                  return (
                    <tr>
                      <td>{ser?.servicename}</td>
                      <td>{ser?.category?.name}</td>
                      <td>{ser?.subcategory?.name}</td>
                      <td>
                        <button className="btn btn-info" onClick={() => {}}>
                          <Link
                            to={`/serviceprovider/details/${ser._id}`}
                            style={{ color: `white` }}
                          >
                            DETAILS
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-success">
                          <Link
                            to={`/serviceprovider/update/${ser._id}`}
                            style={{ color: `white` }}
                          >
                            UPDATE
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteService(ser._id);
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
