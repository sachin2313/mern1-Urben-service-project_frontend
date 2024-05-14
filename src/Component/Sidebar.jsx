import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const path = window.location.pathname;
    const ServiceProviderLinks = [
      {
        name: "Service Provider Dashboard",
        link: "/serviceprovider/dashboard",
        icon: "dashboard",
      },
      {
        name: "Add Service",
        link: "/serviceprovider/addservice",
        icon: "add_circle_outline",
      },
      {
        name: "My Service",
        link: "/serviceprovider/myservice",
        icon: "import_contacts",
      },
      {
        name: "Profile",
        link: "/serviceprovider/profile",
        icon: "person",
      },,
      {
        name: "Log Out",
        link: "/logout",
        icon: "logout"
      }
    ];
    const userLinks = [
      {
        name: "User Dashboard",
        link: "/user/dashboard",
        icon: "dashboard",
      },
      {
        name: "Book Service",
        link: "/user/bookservice",
        icon: "add_circle_outline",
      },
      {
        name: "My Bookings",
        link: "/user/mybookings",
        icon: "import_contacts",
      },
      {
        name: "Profile",
        link: "/user/profile",
        icon: "person",
      },
      {
        name: "Log Out",
        link: "/logout",
        icon: "logout",
      },
    ];

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
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div class="sidenav-header btn btn-primary">
          <i
            class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a class="navbar-brand m-0" href="#" target="_blank">
            <img
              src="../../assets/img/urbanServiceLogo1.png"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            {/* <span class="ms-1 font-weight-bold text-white">Urban Service</span> */}
          </a>
        </div>
        <hr class="horizontal light mt-0 mb-2" />
        <div
          class="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            {path.includes("serviceprovider")
              ? ServiceProviderLinks.map((serpro) => {
                  return (
                    <li class="nav-item">
                      <Link className="nav-link text-white" to={serpro.link}>
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">
                            {serpro.icon}
                          </i>
                          <span class="nav-link-text ms-1">{serpro.name}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })
              : userLinks.map((user) => {
                  return (
                    <li class="nav-item">
                      <Link className="nav-link text-white" to={user.link}>
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">
                            {user.icon}
                          </i>
                          <span class="nav-link-text ms-1">{user.name}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
          </ul>
        </div>
      </aside>
    </>
  );
}
