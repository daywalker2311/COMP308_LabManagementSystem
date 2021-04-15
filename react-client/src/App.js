import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Error from "./components/Error";
import { isUserAuthenticated } from "./Helper";
import AppNavbar from "./components/AppNavbar";
import IndexScreen from "./components/IndexScreen";
import NotLoginScreen from "./components/NotLoginScreen";

import PatientLogin from "./components/patient/PatientLogin";
import CreatePatient from "./components/patient/CreatePatient";
import PatientHomePage from "./components/patient/PatientHomePage";
import VideoList from "./components/patient/VideoList";
import DailyInfo from "./components/patient/DailyInfo";
import CheckList from "./components/patient/CheckList";

import NurseLogin from "./components/nurse/NurseLogin";
import CreateNurse from "./components/nurse/CreateNurse";
import NurseHomePage from "./components/nurse/NurseHomePage";
import Emergency from "./components/patient/Emergency";
import ListPatients from "./components/patient/ListPatients";
import ListDailyInfo from "./components/patient/ListDailyInfo";


import { SiWorldhealthorganization } from "react-icons/si";

const PATIENT_ROUTE_URL = "/patient";
const NURSE_ROUTE_URL = "/nurse";


function App() {
  const [isLogin, setIsLogin] = useState(isUserAuthenticated());
  return (
    <div className="bod">
        
        <div className="icons">
      <SiWorldhealthorganization className="icon" id="icon-green" />
      </div>
      <AppNavbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <IndexScreen />} />
          {/* Patient Route */}
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <Redirect to={`${PATIENT_ROUTE_URL}/home`} />
              ) : (
                <NotLoginScreen
                  route={`${PATIENT_ROUTE_URL}/login`}
                  userRole="Patient"
                />
              )
            }
            path={`${PATIENT_ROUTE_URL}`}
          />
          <Route
            exact
            render={() => <PatientLogin />}
            path={`${PATIENT_ROUTE_URL}/login`}
          />
          <Route
            exact
            render={() => <CreatePatient />}
            path={`${PATIENT_ROUTE_URL}/create`}
          />
          <Route
            exact
            render={() => <PatientHomePage />}
            path={`${PATIENT_ROUTE_URL}/home`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <Emergency />
              ) : (
                <NotLoginScreen route={`${PATIENT_ROUTE_URL}/login`} />
              )
            }
            path={`${PATIENT_ROUTE_URL}/emergency`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <VideoList />
              ) : (
                <NotLoginScreen route={`${PATIENT_ROUTE_URL}/login`} />
              )
            }
            path={`${PATIENT_ROUTE_URL}/videolist`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <DailyInfo />
              ) : (
                <NotLoginScreen route={`${PATIENT_ROUTE_URL}/login`} />
              )
            }
            path={`${PATIENT_ROUTE_URL}/dailyInfo`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <ListDailyInfo />
              ) : (
                <NotLoginScreen
                  route={`${PATIENT_ROUTE_URL}/login`}
                />
              )
            }
            path={`${PATIENT_ROUTE_URL}/listAllDailyInfoById/:patientId`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <CheckList />
              ) : (
                <NotLoginScreen route={`${PATIENT_ROUTE_URL}/login`} />
              )
            }
            path={`${PATIENT_ROUTE_URL}/checklist`}
          />
          {/* Nurse Route */}
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <ListPatients />
              ) : (
                <NotLoginScreen
                  route={`${NURSE_ROUTE_URL}/login`}
                  userRole="Nurse"
                />
              )
            }
            path={`${NURSE_ROUTE_URL}/listPatients`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <DailyInfo />
              ) : (
                <NotLoginScreen route={`${NURSE_ROUTE_URL}/login`} />
              )
            }
            path={`${NURSE_ROUTE_URL}/dailyInfo`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <ListDailyInfo />
              ) : (
                <NotLoginScreen
                  route={`${NURSE_ROUTE_URL}/login`}
                  userRole="Nurse"
                />
              )
            }
            path={`${NURSE_ROUTE_URL}/listAllDailyInfoById/:patientId`}
          />
          <Route
            exact
            render={() =>
              isUserAuthenticated() ? (
                <Redirect to={`${NURSE_ROUTE_URL}/home`} />
              ) : (
                <NotLoginScreen
                  route={`${NURSE_ROUTE_URL}/login`}
                  userRole="Nurse"
                />
              )
            }
            path={`${NURSE_ROUTE_URL}`}
          />

          <Route
            exact
            render={() => <NurseLogin />}
            path={`${NURSE_ROUTE_URL}/login`}
          />
          <Route
            exact
            render={() => <CreateNurse />}
            path={`${NURSE_ROUTE_URL}/create`}
          />
          <Route
            exact
            render={() => <NurseHomePage />}
            path={`${NURSE_ROUTE_URL}/home`}
          />

          {/* Default route -> Render 404 Error page */}
          <Route path="*" render={() => <Error />} />
        </Switch>
      </Router>
    
    </div>
    
  );
}

export default App;
