import React from "react";
import "./widgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Member</span>

      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img
            src="https://source.unsplash.com/random/?user"
            alt=""
            className="widgetSmallImage"
          />

          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Anna Keller</span>
            <span className="widgetSmallUserTitle">Sortware Engineer</span>
          </div>

          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmallListItem">
          <img
            src="https://source.unsplash.com/random/?user"
            alt=""
            className="widgetSmallImage"
          />

          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Anna Keller</span>
            <span className="widgetSmallUserTitle">Sortware Engineer</span>
          </div>

          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmallListItem">
          <img
            src="https://source.unsplash.com/random/?user"
            alt=""
            className="widgetSmallImage"
          />

          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Anna Keller</span>
            <span className="widgetSmallUserTitle">Sortware Engineer</span>
          </div>

          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
