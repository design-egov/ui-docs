import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Dashboard from '../../assets/img/Patterns/Dashboard.png'

const isMobile = window.innerWidth < 768;
const PatternDashboard = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>Dashboard</Header>
      </div>
          <img src={Dashboard} className={" pr-8  pb-8" + isMobile ? "w-58%" : "w-4/5"} alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternDashboard;
