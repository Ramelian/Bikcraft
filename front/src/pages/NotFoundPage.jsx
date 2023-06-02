import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        paddingInline: "20px",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "black", fontSize: "3rem", marginBottom: "20px" }}>
        404 Not Found
      </h1>
      <p style={{ color: "black", fontSize: "1.5rem", marginBottom: "20px" }}>
        Oops! The page you're looking for does not exist.
      </p>
      <Link to="/">
        <div className="btn">Go back to Home</div>
      </Link>
    </div>
  );
};

export default NotFoundPage;
