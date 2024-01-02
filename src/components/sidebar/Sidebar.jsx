import React from "react";
import "./sidebar.css";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BarChartIcon from "@mui/icons-material/BarChart";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MessageIcon from "@mui/icons-material/Message";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeWorkIcon className="sidbarIcon" />
              Home
            </li>

            <li className="sidebarListItem">
              <TrendingUpIcon className="sidbarIcon" />
              Analystics
            </li>

            <li className="sidebarListItem">
              <MonetizationOnIcon className="sidbarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutlineIcon className="sidbarIcon" />
              User
            </li>

            <li className="sidebarListItem">
              <StorefrontIcon className="sidbarIcon" />
              Products
            </li>

            <li className="sidebarListItem">
              <LocalAtmIcon className="sidbarIcon" />
              Transactions
            </li>

            <li className="sidebarListItem">
              <BarChartIcon className="sidbarIcon" />
              Report
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidbarIcon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <FeedbackIcon className="sidbarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <MessageIcon className="sidbarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
