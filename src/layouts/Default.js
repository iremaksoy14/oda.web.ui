import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";
import SideNavBar from "../components/layout/MainSidebar/SideNavBar";
import { Col } from "react-bootstrap";
import './DashboardIndex.css';
const DefaultLayout = ({ children, noNavbar, noFooter,noSideNav }) => (
  
    <Container className="overFlow-h" fluid style={{backgroundColor:"white",borderRadius:25,padding:0}}>            
        <Row
          className="main-content"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12" 
          tag="main"
          style={{padding:0}}
        >
          {/* <Col className="col-md-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>         
              <SideNavBar/>
          </Col> */}
          <Col className="col-md-12">
          {!noNavbar && <MainNavbar />}        
          {children}
          <MainFooter />
          </Col>
        
        </Row>     
    </Container>
  
);

DefaultLayout.propTypes = {
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

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: true,
  noSideNav: true,
};

export default DefaultLayout;
