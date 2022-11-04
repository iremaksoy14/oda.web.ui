import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout2 = ({ children, noNavbar, noFooter,noSideNav }) => (
  
    <Container fluid style={{backgroundColor:"white",borderRadius:25}}>            
        <Row
          className="main-content"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12" 
          tag="main"
        >
          {!noNavbar && <MainNavbar />}         
          {children}
          <MainFooter />
        </Row>     
    </Container>     
);

DefaultLayout2.propTypes = {
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

DefaultLayout2.defaultProps = {
  noNavbar: false,
  noFooter: true,
  noSideNav: true,
};

export default DefaultLayout2;
