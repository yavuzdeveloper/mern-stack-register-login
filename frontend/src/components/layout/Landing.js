import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>MERN Stack</h1>
          <p>Register, Login</p>
          <br />
          <div className="buttons">
            <Link to="/register" className="btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
