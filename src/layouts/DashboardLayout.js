import React from "react";
import PropTypes from "prop-types";
import { Container } from "shards-react";
import SideNavBar from "../components/layout/Dashboard/MainSidebar/MainSidebar";
import "./DashboardIndex.css"


const DashboardLayout = ({ children, noNavbar, noFooter,noSideNav }) => (
  
    <Container fluid style={{backgroundColor:"white"}}>                    
        <div className="dashboard">           
          <SideNavBar/> 
          <div className="dash-content container-fluid">              
           {children}    
          </div>        
        </div>        
    </Container>
  
);

DashboardLayout.propTypes = {
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

DashboardLayout.defaultProps = {
  noNavbar: false,
  noFooter: true,
  noSideNav: true,
};

export default DashboardLayout;
