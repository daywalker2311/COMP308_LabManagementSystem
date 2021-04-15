import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { BiHomeHeart } from "react-icons/bi";
function AppNavbar(props) {
  const { isLogin, setIsLogin } = props;
  const [isPatient, setPatient] = useState(false);
  const [isNurse, setNurse] = useState(false);

  const patientID = sessionStorage.getItem("patientId");

  const currentUrl = window.location.pathname;
  let homeRoute = currentUrl.includes("/patient")
    ? "/patient"
    : currentUrl.includes("/nurse")
      ? "/nurse"
      : "/";

  const deleteCookies = async () => {
    try {
      await axios.get("http://localhost:5000/logout");
      sessionStorage.clear();
      setIsLogin(false);
      window.location.href = "/";
      setPatient(false);
      setNurse(false);
    } catch (e) {
      console.log(e);
    }
  };

  const NavRenderer = () => {
    if (isPatient) {
      return (
        <Nav.Link
          onClick={() => deleteCookies()}
          className="btn btn-outline-primary"
        >
          Logout
        </Nav.Link>
      );
    }
  };

  useEffect(() => {
    if (isLogin) {
      console.log("homeRoute", homeRoute);
      if (homeRoute == `/patient`) {
        setPatient(true);
        console.log("patient");
      }
      if (homeRoute == `/nurse`) {
        setNurse(true);
        console.log("nurse");
      }
    }
  }, [isLogin]);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
          <Nav.Link href={isLogin ? `${homeRoute}/home` : homeRoute}>
      
        <b><div className="home"> <BiHomeHeart className="iconhome" id="icon-home" /> &nbsp; Home   
        </div>  </b>
             </Nav.Link>
          {isPatient && (
            <>
              <Nav.Link href={`${homeRoute}/emergency`}>
                Emergency Alert
              </Nav.Link>
              <Nav.Link href={`${homeRoute}/dailyInfo`}>
                Enter Vital Signs
              </Nav.Link>
              <Nav.Link href={`${homeRoute}/listAllDailyInfoById/` + patientID}>
                List Vital Signs
              </Nav.Link>
              <Nav.Link href={`${homeRoute}/videolist`}>
                Motivation Video
              </Nav.Link>
              <Nav.Link href={`${homeRoute}/checklist`}>Check List</Nav.Link>
            </>
          )}
          {isNurse && (
            <>
              <Nav.Link href={`${homeRoute}/listPatients`}>
                List of Patients
              </Nav.Link>
            </>
          )}
        </Nav>
       
        {!isLogin ? (
          <>
            <Nav.Link href="/patient/login" className="bt">
           <b>&nbsp;&nbsp;&nbsp; Patient Login</b>  
            </Nav.Link>
            &nbsp;&nbsp;
            <Nav.Link href='/patient/create' className="bt">
            <b>&nbsp;&nbsp;&nbsp;  Patient Signup</b>
            </Nav.Link>
            &nbsp;&nbsp;
            <Nav.Link href="/nurse/login" className="bt">
            <b>&nbsp;&nbsp;&nbsp;  Nurse Login </b>
            </Nav.Link>
            &nbsp;&nbsp;
            <Nav.Link href='/nurse/create' className="bt">
            <b>&nbsp;&nbsp;&nbsp;   Nurse Signup</b>
            </Nav.Link>
          </>
        ) : (
          <Nav.Link
            onClick={() => deleteCookies()}
            className="btn btn-outline-primary"
          >
            Logout
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default AppNavbar;
