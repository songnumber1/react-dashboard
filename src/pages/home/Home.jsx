import React from "react";
import "./home.css";
import FeaturedInfo from "./../../components/featuredInfo/FeaturedInfo";
import Chart from "./../../components/chart/Chart";
import { chartData } from "../../data/chartData";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "./../../components/widgetSmall/WidgetSmall";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={chartData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
