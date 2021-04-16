import React, { useState } from "react";
import { isUserAuthenticated } from "../../Helper";
import { Redirect } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { apiUrl } from "../../Helper";
import "../../App.css";
import logo from '../../images/dailyinfo.jpg';

function DailyPatientInfo() {

  const currentUrl = window.location.pathname;
  let homeRoute = currentUrl.includes("/patient")
    ? "/patient"
    : currentUrl.includes("/nurse")
      ? "/nurse"
      : "/";

  const patientID = sessionStorage.getItem("patientId");
  const created_by = sessionStorage.getItem("created_by");

  const [dailyPatientInfo, setDailyPatientInfo] = useState({
    pulseRate: "",
    bloodPressure: "",
    weight: "",
    temperature: "",
    respiratoryRate: "",
  });

  const saveDailyPatientInfo = () => {
    const data = {
      pulseRate: dailyPatientInfo.pulseRate,
      bloodPressure: dailyPatientInfo.bloodPressure,
      weight: dailyPatientInfo.weight,
      temperature: dailyPatientInfo.temperature,
      respiratoryRate: dailyPatientInfo.respiratoryRate,
      patient: patientID,
      created_by: created_by
    };

    axios
      .post(`${apiUrl}dailyPatientInfo`, data)
      .then((res) => {
        console.log(res);
        window.location.href = `${homeRoute}/home`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    e.persist();
    setDailyPatientInfo({ ...dailyPatientInfo, [e.target.name]: e.target.value });
  };
  return (
    <>
      <img src={logo} style={{ width: '70%', height: '20%' }} alt="Logo" />;
      <Jumbotron style={{ width: '70%' }}>
        <Form onSubmit={saveDailyPatientInfo}>
          <Form.Group>
            <Form.Label>Pulse Rate</Form.Label>
            <Form.Control
              type="number"
              name="pulseRate"
              id="pulseRate"
              placeholder="Enter pulse rate"
              value={dailyPatientInfo.pulseRate}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control
              type="number"
              name="bloodPressure"
              id="bloodPressure"
              placeholder="Enter blood pressure"
              value={dailyPatientInfo.bloodPressure}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              name="weight"
              id="weight"
              placeholder="Enter weight"
              value={dailyPatientInfo.weight}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>temperature</Form.Label>
            <Form.Control
              type="number"
              name="temperature"
              id="temperature"
              placeholder="Enter temperature"
              value={dailyPatientInfo.temperature}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Respiratory Rate</Form.Label>
            <Form.Control
              type="number"
              name="respiratoryRate"
              id="respiratoryRate"
              placeholder="Enter respiratory rate"
              value={dailyPatientInfo.respiratoryRate}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Create Vital Signs
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
}

export default DailyPatientInfo;
