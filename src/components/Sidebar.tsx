import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUser, faFolder, faChartLine, faUsers } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "80px",
        backgroundColor: "#F05023",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      {/* Sidebar Icons */}
      <div style={{ marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faFolder} size="lg" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faChartLine} size="lg" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faUsers} size="lg" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faCog} size="lg" />
      </div>

      {/* Bottom Profile Section */}
      <div style={{ marginTop: "auto", marginBottom: "20px" }}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    </div>
  );
};

export default Sidebar;