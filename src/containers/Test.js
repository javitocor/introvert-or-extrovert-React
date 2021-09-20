import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi from '../helpers/APICall';
import { updateTotalValue } from '../actions/items';
import style from '../style/Test.module.css';


const Test = (props) => {
  const {pending, itemsList, totalValue} = props;
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    getAllItems();
  }, []);


  return (
    
  );
};

Items.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    itemsList: PropTypes.arrayOf(PropTypes.object),
    totalValue: PropTypes.number,
  }).isRequired,
  getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    itemsList: state.items.itemsList,
    pending: state.items.pending,
    totalValue: state.items.totalValue,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllItems: callApi,
  updateTotalValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test);