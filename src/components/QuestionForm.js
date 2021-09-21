/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const QuestionForm = (props) => {
  const { question, onSubmit, numQuestions, index } = props;
  const [selected, setSelected] = useState(0);

  function handleOptionChange(event){
    setSelected(event.target.value)
  };

  function handleSubmit(e){
    e.preventDefault();
    onSubmit(selected)
  }

  return (
    <div className="">
      <h6>
        QUESTION
        {' '}
        {index + 1}
        {' '}
        OF
        {' '}
        {numQuestions}
      </h6>
      <div className="">
        <h6>{}</h6>
        <form onSubmit={handleSubmit}>
          {/*
          {question.answers.map(answer => {
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name='test'
                  value={answer.value}
                  checked={selected === answer.value}
                  onChange={handleOptionChange}
                />
                {answer.text}
              </label>
            </div>
          })} */}
          <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
              Next Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
QuestionForm.propTypes = {
  question: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  numQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default QuestionForm;