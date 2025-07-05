import React from "react";
import { NavLink } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.errorCode}>404</div>
        <div style={styles.title}>Page Not Found</div>
        <div style={styles.message}>
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </div>
        <NavLink to="/store" style={styles.button}>
          Go to Store
        </NavLink>
      </div>
      <div style={styles.bgBlur1}></div>
      <div style={styles.bgBlur2}></div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
    position: "relative",
    overflow: "hidden",
  },
  card: {
    zIndex: 2,
    background: "rgba(255,255,255,0.95)",
    borderRadius: "2rem",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
    padding: "3rem 2.5rem",
    textAlign: "center",
    maxWidth: "350px",
    width: "100%",
    backdropFilter: "blur(4px)",
  },
  errorCode: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#0ea5e9",
    letterSpacing: "0.1em",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.1rem",
    color: "#64748b",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    padding: "0.75rem 2rem",
    background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
    color: "#fff",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    boxShadow: "0 2px 8px rgba(14,165,233,0.15)",
    transition: "background 0.2s",
  },
  bgBlur1: {
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
    filter: "blur(60px)",
    zIndex: 1,
  },
  bgBlur2: {
    position: "absolute",
    bottom: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
    filter: "blur(60px)",
    zIndex: 1,
  },
};

export default ErrorElement;