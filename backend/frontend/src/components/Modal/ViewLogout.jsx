import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

const ViewLogout = ({ active, logout }) => {
  return (
    <div
      className={`${
        active ? "" : "hidden"
      } absolute mb-24 rounded-sm pb-1 text-white  text-[#999999] cursor-pointer duration-200`}
      onClick={logout}
    >
      <div className="hover:text-white mb-2">Log out</div>
      <Link to="/reset-password">
        <div className="hover:text-white mb-3">Reset Password</div>
      </Link>
      <Link to="/login">
        <div className="hover:text-white mb-3">Login</div>
      </Link>
    </div>
  );
};

export default connect(null, { logout })(ViewLogout);
