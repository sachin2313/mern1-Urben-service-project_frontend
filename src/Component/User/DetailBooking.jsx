import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

export const DetailBooking = () => {
    const cards = [
      {
        id: 1,
        title: "Card 1",
        content: "This is the content of Card 1",
        imageUrl: "https://via.placeholder.com/150",
      },
      // Add more cards as needed
    ];
    const id = useParams().id;
    const [service, setservice] = useState([]);

    useEffect(() => {
      submitHandler();
    }, []);

    const submitHandler = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/book/book/" + id
        );
        console.log(res.data.data);
        setservice(res.data.data);
      } catch (error) {
        console.log(error);
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
      <div className="container mt-5">
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={service?.service?.imageUrl}
                  className="card-img-top"
                  alt={`Card ${service._id}`}
                />

                <div className="card-body">
                  <h5 className="card-title">{service?.service?.servicename}</h5>
                  <p className="card-text">{service?.serviceprovider?.name}</p>
                  <p className="card-text">{service?.totalAmount}</p>
                  <p className="card-text">{service?.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
