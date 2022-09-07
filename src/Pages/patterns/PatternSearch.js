import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Search from '../../assets/img/Patterns/Search.png'

const isMobile = window.innerWidth < 768;
const PatternSearch = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "125%"} : {}}>
      <div className="mb-8">
        <Header>Search</Header>
      </div>
          <img src={Search} className={" pr-8  pb-8" + isMobile ? "w-4/3" : "w-4/5"} alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternSearch;
