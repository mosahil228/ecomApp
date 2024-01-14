import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <div className="dashboard">
        <div className="leftMenu">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/buyer/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          
        </div>
      </div>
    </>
  );
};

export default UserMenu;