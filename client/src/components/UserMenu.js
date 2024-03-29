import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <div className="admin-dashboard">
        <div className="leftMenu">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/buyer/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/buyer/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          
        </div>
      </div>
    </>
  );
};

export default UserMenu;