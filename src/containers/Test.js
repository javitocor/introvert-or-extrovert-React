/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi from '../helpers/APICall';
import { updateTotalValue } from '../actions/items';
import pickQuestions from '../helpers/pickQuestions';
import QuestionForm from '../components/QuestionForm';
import TestFinish from '../components/TestFinish';
import style from '../style/Test.module.css';


const Test = (props) => {
  const {pending, itemsList, getAllItems, updateTotalValueRedux} = props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getAllItems();
    setSelectedItems(pickQuestions(5, itemsList))
  }, []);

  function handleSubmitQuestion(points){
    setValue(value + points);
    setIndex(index + 1);
  };

  function handleSubmitTest(){
    updateTotalValueRedux(value);
  };

  return selectedItems.length === 0 ? <div className="d-flex justify-content-center align-items-center pt-5 w-100">Loading...</div> : (
    <main className="">
      <div className="">
        <h2>Test: Are you an introvert or an extrovert?</h2>
        <div className="">
          {index < selectedItems.length 
          ? <QuestionForm question={selectedItems[index]} onSubmit={handleSubmitQuestion} numQuestions={selectedItems.length} index={index} />
          : <TestFinish onSubmit={handleSubmitTest} />
          }          
        </div>
      </div>
    </main>
  );
};

Test.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    itemsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    itemsList: state.items.itemsList,
    pending: state.items.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllItems: callApi,
  updateTotalValueRedux: updateTotalValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test);