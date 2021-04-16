import React, { useEffect, useState } from "react";
import { isUserAuthenticated } from "../../Helper";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import VideoPlayer from "./components/Videoplayer";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../../App.css";

function VideoList() {
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <>
      <div>
        Show Videos here
</div>
    </>
  );
}

export default VideoList;
