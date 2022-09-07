import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import MobileVerification from '../../assets/img/Patterns/MobileVerification.png';

const isMobile = window.innerWidth < 768;
const PatternMobileVerification = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "125%"} : {}}>
      <div className="mb-8">
        <Header>Mobile Verification</Header>
      </div>
          <img src={MobileVerification} className={" pr-8  pb-8" + isMobile ? "w-4/4" : "w-4/12"} alt="MobileVerification"></img>
          </div>
  );
  
};

export default PatternMobileVerification;
