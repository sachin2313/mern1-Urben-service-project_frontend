import React, { useEffect, useState } from 'react'
import './BookDetailService.css'
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export const DetailBookService = () => {

  const navigate = useNavigate()
    const cards = [
      {
        id: 1,
        title: "Card 1",
        content: "This is the content of Card 1",
        imageUrl: "https://via.placeholder.com/150",
      },
      // Add more cards as needed
    ];
      const submitBooking = async () => {
        const serviceProviderId = service.serviceprovider;
        const userId = localStorage.getItem("id");
        const id1 = id;
        const amount = service.fees;

        const objectToSbmit = {
          service: id1,
          serviceprovider: serviceProviderId,
          user: userId,
          totalAmount: amount,
        };

        try {
          const res = await axios.post(
            "http://localhost:4000/book/book",
            objectToSbmit
          );
          setservice(res.data.data);
          console.log("lmkmlkmkl",res.data.data);
          navigate("/user/BookdetailService/"+res?.data?.data._id);
          
        } catch (err) {
          console.log(err);
        }
      };

    const [service, setservice] = useState([])

    const id = useParams().id;
    const submitHandler = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/service/service/" + id
        );
        console.log(res.data.data);
        setservice(res.data.data);
        Navigate("/user/BookdetailService/:id");
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
    submitHandler()
      
    }, [])

    
    
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="../../assets/css/BookDetailService.css" />
        
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

      <div className="container mt-5">
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={service.imageUrl}
                  className="card-img-top"
                  alt={`Card ${service._id}`}
                />

                <div className="card-body">
                  <h5 className="card-title">{service.servicename}</h5>
                  <p className="card-text">{service?.category?.name}</p>
                  <p className="card-text">{service?.subcategory?.name}</p>
                  <p className="card-text">{service?.type?.name}</p>
                  <p className="card-text">{service?.fees}</p>
                  <p className="card-text">{service?.area}</p>
                  <p className="card-text">{service?.city}</p>
                  <p className="card-text">{service?.state}</p>
                  <button className="btn btn-primary" onClick={() => {submitBooking()}}>
                    confirm
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
