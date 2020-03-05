import React from "react";
import "./Landing.css";
// import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="parent">
      <header id="home">
        <div className="transparent-film">
        <div className="header-content">
          <div className="inner">
            <h1 className="cursive"> DEVELOPER PORTAL </h1>
            <h2> The Face of your API Products </h2>
            <hr />
          </div>
        </div>
        </div>
        
      </header>
      <section className="landing-section bg-primary" id="one">
        <div className="outer">
          <div className="section-content">
            <div className="center-content">
              <h2 className="margin-top-0 text-primary">
                About DevPortal
              </h2>
              <br />
              <p className="text-faded"> A Developer Portal is a self-service support hub, a trust signal, a communication nexus for API stakeholders and a key DevRel tool that helps an organization to provide the best possible developer experience for its APIs. </p>
              <p className="text-faded"> It is a complete, self-service developer portal is key to the success of API adoption. The developer portal is the face of your API program, providing everything that internal, partner, and third party developers need. </p>
              <Link to="#two" className="btn btn-default btn-xl page-scroll">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-section" id="two">
        <div className="outer">
          <div className="section-content">
          <div className="center-content text-center">
              <h2 className="margin-top-0 text-primary">Features</h2>
              <hr className="primary" />
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                <i
                  className="icon-lg ion-android-laptop wow fadeIn"
                  data-wow-delay=".3s"
                ></i>
                <h3>Everything you need!</h3>
                <p className="text-muted">Provides all necessary materials and services needed to reduce friction when working with an API (For example: onboarding, registration, API key provisioning, payments).</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                <i
                  className="icon-lg ion-social-sass wow fadeInUp"
                  data-wow-delay=".2s"
                ></i>
                <h3>Trust Generation</h3>
                <p className="text-muted">Generates trust and gives an indication if your business will be committed to an API over a long enough period.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                <i
                  className="icon-lg ion-ios-star-outline wow fadeIn"
                  data-wow-delay=".3s"
                ></i>
                <h3>Helping Hand</h3>
                <p className="text-muted">Helps potential API customers find the developer portal and the API products it contains through Search Engine Optimization and other web traffic generation.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-center">
              <div className="feature">
                <i
                  className="icon-lg ion-ios-star-outline wow fadeIn"
                  data-wow-delay=".3s"
                ></i>
                <h3>Relevant Tools</h3>
                <p className="text-muted">Has tools to manage and maintain the relationship with API customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-section bg-tertiary" id="four">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="margin-top-0 text-primary wow fadeIn">Get in Touch</h2>
              <hr className="primary" />
              <p>
                We love feedback. Fill out the form below and we'll get back to
                you as soon as possible.
              </p>
            </div>
            <div className="col-lg-10 col-lg-offset-1 text-center">
              <form className="contact-form row">
                <div className="col-md-4">
                  <label></label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-4">
                  <label></label>
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-4">
                  <label></label>
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="col-md-12">
                  <label></label>
                  <textarea
                    className="form-control"
                    rows="9"
                    placeholder="Your message here.."
                  ></textarea>
                </div>
                <div className="col-md-4 col-md-offset-4">
                  <label></label>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#alertModal"
                    className="btn btn-primary btn-block btn-lg"
                  >
                    Send <i className="ion-android-arrow-forward"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-sm-3 column">
              <h4 className="h4-color">Information</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="a-color" to="#one">About Us</Link>
                </li>
                <li>
                  <Link className="a-color" to="#two">Features</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3 column">
              <h4 className="h4-color">Registration</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="a-color" to="/login">Login</Link>
                </li>
                <li>
                  <Link className="a-color" to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3 column">
              <h4 className="h4-color">Stay Posted</h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    title="No spam, we promise!"
                    placeholder="Tell us your email"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#alertModal"
                    type="button"
                  >
                    Subscribe for updates
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default Landing;
