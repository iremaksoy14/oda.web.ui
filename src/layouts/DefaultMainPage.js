import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";
import SideNavBar from "../components/layout/MainSidebar/SideNavBar";

const DefaultMainPage = ({ children, noNavbar, noFooter,noSideNav }) => (
  
    <Container fluid style={{backgroundColor:"white",borderRadius:25}}>            
        <Row
          className="main-content"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12" 
          tag="main"
        >
          {!noNavbar && <MainNavbar />}         
           <SideNavBar />
          {children}
          <MainFooter />
        </Row>     
    </Container>     
);

DefaultMainPage.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,

  noSideNav: PropTypes.bool
};

DefaultMainPage.defaultProps = {
  noNavbar: false,
  noFooter: true,
  noSideNav: true,
};

export default DefaultMainPage;
