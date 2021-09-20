import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTotalValue } from '../actions/items';
import style from '../style/Results.module.css';


const Result = (props) => {
  const {totalValue} = props;
  const [value, setValue] = useState(0);
  
  return (
    
  );
};

Items.propTypes = {
  totalValue: PropTypes.number,isRequired,
  updateTotalValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    totalValue: state.items.totalValue,
  },
});

const mapDispatchToProps = dispatch => ({
  updateTotalValue: newValue => {
    dispatch(updateTotalValue(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);