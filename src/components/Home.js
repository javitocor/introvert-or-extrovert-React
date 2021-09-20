import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from '../style/Home.module.css';

class Home extends Component {
  render() {
    return (
      <main className="pt-5">
        <div className={home.main}>
          <div className="jumbotron  text-centerpt-5 mb-0 bg-light">
            <h1 className="display-4 text-white">Are you an introvert or an extrovert?</h1>
            <p className="lead text-white">So do you consider yourself more of an introvert or an extrovert? Take this test, put together with input from psychoanalyst Mrs. IKnowEverything, and find out</p>
            <hr className="my-4" />
            <p className="text-white">by JaviCorp Psychologies</p>
            <div className="lead text-white">
              <Link
                to="/"
                id="list-home-list"
                className="btn btn-primary btn-lg"
                data-toggle="list"
                role="tab"
                aria-controls="home"
              >
                Go to the Test
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;