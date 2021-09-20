import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTotalValue } from '../actions/items';
import checkResults from '../helpers/checkResults';
import style from '../style/Results.module.css';


const Results = (props) => {
  const {totalValue, updateTotalValueRedux} = props;
  const [results, setResults] = useState('');

  useEffect(() => {
    setResults(checkResults(totalValue));
  }, []);

  function handleEnd(){
    updateTotalValueRedux(0);
  }
  
  return (
    <main className="">
      <div className="">
        <h3>
          Your results are:
          {' '}
          {results}
        </h3>
        <div className="">
          <Link
            onClick={handleEnd}
            to="/"
            id="list-home-list"
            className="btn btn-primary btn-lg"
            data-toggle="list"
            role="tab"
            aria-controls="home"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

Results.propTypes = {
  totalValue: PropTypes.number.isRequired,
  updateTotalValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    totalValue: state.items.totalValue,
  },
});

const mapDispatchToProps = dispatch => ({
  updateTotalValueRedux: newValue => {
    dispatch(updateTotalValue(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);