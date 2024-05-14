import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const MyBooking = () => {
    const [user, setuser] = useState([]);

    const id = localStorage.getItem("id");
    const fetchMyBooking = async () => {
      try {
        if (id !== undefined || id !== null) {
          const res = await axios.get(
            "http://localhost:4000/book/getBookingByUser/" + id
          );
          console.log(res.data);
          setuser(res.data.data);
        }
      } catch (error) {
        alert("no booking found");
      }
    };

    

    useEffect(() => {
      if (id != undefined || id !== null) {
        console.log("id.......", id);
        fetchMyBooking();
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

        <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />

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
          href="../assets/css/material-dashboard.css?v=3.0.0"
          rel="stylesheet"
        />
      </Helmet>
      <div className="col-md-12">
        <div className="card strpied-tabled-with-hover">
          <div className="card-header ">
            <h4 className="card-title">My Bookings</h4>
            <p className="card-category">Here is your booked service</p>
          </div>
          <div className="card-body table-full-width table-responsive">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th style={{ justifyContent: "center" }}>Service Name</th>
                  <th style={{ justifyContent: "center" }}>Total Amount</th>
                  <th style={{ justifyContent: "center" }}>Status</th>
                  <th style={{ justifyContent: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((user) => {
                  return (
                    <tr>
                      <td>{user?.service?.servicename}</td>
                      <td>{user?.totalAmount}</td>
                      <td>{user?.status}</td>
                      <td>
                        <button className="btn btn-info" onClick={() => {}}>
                          <Link
                            to={`/user/details/${user._id}`}
                            style={{ color: `white` }}
                          >
                            DETAILS
                          </Link>
                        </button>
                      </td>
                      {/* <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteService(user._id);
                          }}
                        >
                          DELETE
                        </button>
                      </td> */}
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
}
