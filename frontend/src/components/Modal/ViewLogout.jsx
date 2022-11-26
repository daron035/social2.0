import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const ViewLogout = ({ active, logout }) => {
  var display;
  return (
    <div
      className={`${
        active ? "" : "hidden"
      } absolute mb-24 rounded-sm border-b pb-1 text-white hover:text-white text-[#999999] cursor-pointer duration-200`}
      onClick={logout}
    >
      Log out
    </div>
  );
};

export default connect(null, { logout })(ViewLogout);
