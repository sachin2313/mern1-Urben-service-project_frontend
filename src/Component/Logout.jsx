import React from 'react'

export const Logout = () => {
    const handleLogOut = () =>{
          localStorage.removeItem("id");
          window.location.pathname= "/"
    }
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Logout</h5>
          <p className="card-text">Are you sure you want to logout?</p>
          <button className="btn btn-primary" onClick={handleLogOut}>
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
  );
}
