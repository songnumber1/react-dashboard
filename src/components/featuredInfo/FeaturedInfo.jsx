import React from "react";
import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span>Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span>Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,234</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span>Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,213</span>
          <span className="featuredMoneyRate">
            +11.4
            <ArrowUpwardIcon className="featuredIcon negative" />
          </span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
