// import React from 'react'

// export const Navbar = () => {
//   return (
//     <nav
//       className="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none"
//       id="navbarBlur"
//       data-scroll="true"
//     >
//       <div className="container-fluid py-1 px-3">
//         <div
//           className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
//           id="navbar"
//         >
//           <div className="ms-md-auto pe-md-3 d-flex align-items-center">
//             <div className="input-group input-group-outline">
//               <label className="form-label">Type here...</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 onfocus="focused(this)"
//                 onfocusout="defocused(this)"
//               />
//             </div>
//           </div>
//           <ul className="navbar-nav  justify-content-end">
//             <li className="nav-item d-flex align-items-center">
//               <a
//                 className="btn btn-outline-primary btn-sm mb-0 me-3"
//                 target="_blank"
//                 href="https://www.creative-tim.com/builder?ref=navbar-material-dashboard"
//               >
//                 Online Builder
//               </a>
//             </li>
//             <li className="mt-2">
//               <span />
//             </li>
//             <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
//               <a
//                 href="javascript:;"
//                 className="nav-link p-0 text-body"
//                 id="iconNavbarSidenav"
//               >
//                 <div className="sidenav-toggler-inner">
//                   <i className="sidenav-toggler-line" />
//                   <i className="sidenav-toggler-line" />
//                   <i className="sidenav-toggler-line" />
//                 </div>
//               </a>
//             </li>
//             <li className="nav-item px-3 d-flex align-items-center">
//               <a href="javascript:;" className="nav-link p-0 text-body">
//                 <i
//                   className="fa fa-cog fixed-plugin-button-nav cursor-pointer"
//                   aria-hidden="true"
//                 />
//               </a>
//             </li>
//             <li className="nav-item dropdown pe-2 d-flex align-items-center">
//               <a
//                 href="javascript:;"
//                 className="nav-link p-0 text-body"
//                 id="dropdownMenuButton"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="fa fa-bell cursor-pointer" aria-hidden="true" />
//               </a>
//               <ul
//                 className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
//                 aria-labelledby="dropdownMenuButton"
//               >
//                 <li className="mb-2">
//                   <a
//                     className="dropdown-item border-radius-md"
//                     href="javascript:;"
//                   >
//                     <div className="d-flex py-1">
//                       <div className="my-auto">
//                         <img
//                           src="./assets/img/team-2.jpg"
//                           className="avatar avatar-sm  me-3 "
//                         />
//                       </div>
//                       <div className="d-flex flex-column justify-content-center">
//                         <h6 className="text-sm font-weight-normal mb-1">
//                           <span className="font-weight-bold">New message</span>{" "}
//                           from Laur
//                         </h6>
//                         <p className="text-xs text-secondary mb-0">
//                           <i className="fa fa-clock me-1" aria-hidden="true" />
//                           13 minutes ago
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a
//                     className="dropdown-item border-radius-md"
//                     href="javascript:;"
//                   >
//                     <div className="d-flex py-1">
//                       <div className="my-auto">
//                         <img
//                           src="./assets/img/small-logos/logo-spotify.svg"
//                           className="avatar avatar-sm bg-gradient-dark  me-3 "
//                         />
//                       </div>
//                       <div className="d-flex flex-column justify-content-center">
//                         <h6 className="text-sm font-weight-normal mb-1">
//                           <span className="font-weight-bold">New album</span> by
//                           Travis Scott
//                         </h6>
//                         <p className="text-xs text-secondary mb-0">
//                           <i className="fa fa-clock me-1" aria-hidden="true" />1
//                           day
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item border-radius-md"
//                     href="javascript:;"
//                   >
//                     <div className="d-flex py-1">
//                       <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
//                         <svg
//                           width="12px"
//                           height="12px"
//                           viewBox="0 0 43 36"
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                         >
//                           {" "}
//                           <title>credit-card</title>{" "}
//                           <g
//                             stroke="none"
//                             strokeWidth={1}
//                             fill="none"
//                             fillRule="evenodd"
//                           >
//                             {" "}
//                             <g
//                               transform="translate(-2169.000000, -745.000000)"
//                               fill="#FFFFFF"
//                               fillRule="nonzero"
//                             >
//                               {" "}
//                               <g transform="translate(1716.000000, 291.000000)">
//                                 {" "}
//                                 <g transform="translate(453.000000, 454.000000)">
//                                   {" "}
//                                   <path
//                                     className="color-background"
//                                     d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
//                                     opacity="0.593633743"
//                                   />{" "}
//                                   <path
//                                     className="color-background"
//                                     d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
//                                   />{" "}
//                                 </g>{" "}
//                               </g>{" "}
//                             </g>{" "}
//                           </g>{" "}
//                         </svg>
//                       </div>
//                       <div className="d-flex flex-column justify-content-center">
//                         <h6 className="text-sm font-weight-normal mb-1">
//                           Payment successfully completed
//                         </h6>
//                         <p className="text-xs text-secondary mb-0">
//                           <i className="fa fa-clock me-1" aria-hidden="true" />2
//                           days
//                         </p>
//                       </div>
//                     </div>
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item d-flex align-items-center">
//               <a
//                 href="./pages/sign-in.html"
//                 className="nav-link font-weight-bold px-0 text-body"
//               >
//                 <i className="fa fa-user me-sm-1" aria-hidden="true" />
//                 <span className="d-sm-inline d-none">Sign In</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
