import React from "react";
import "./user.css";
import {
  CalendarMonth,
  LocationOn,
  MailOutline,
  PermIdentity,
  PhoneIphone,
  Publish,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Arsham Haghani</span>
              <span className="userShowUserTitle">Sortware Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">hani99</span>
            </div>

            <div className="userShowInfo">
              <CalendarMonth className="userShowIcon" />
              <span className="userShowInfoTitle">25.12.2000</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneIphone className="userShowIcon" />
              <span className="userShowInfoTitle">+61 123 456 123</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">hani@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationOn className="userShowIcon" />
              <span className="userShowInfoTitle">sydney | Australia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTilte">Edit</span>

          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="hani99"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Arsham Haghani"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="hani@gamil.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+61 123 456 123"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Sydney | Australia"
                  className="userUpdateInput"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
