import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TestFinish = (props) => {
  const { onSubmit } = props;


  return (
    <div className="">
      <h6>Test Finished</h6>
      <div className="">
        <Link
          onClick={() => onSubmit()}
          to="/results"
          id="list-home-list"
          className="btn btn-primary btn-lg"
          data-toggle="list"
          role="tab"
          aria-controls="results"
        >
          Go to the Results
        </Link>
      </div>
    </div>
  );
}
TestFinish.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TestFinish;