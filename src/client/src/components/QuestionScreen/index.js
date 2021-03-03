import React from 'react'
import { connect } from 'react-redux';

function QuestionScreen(props) {
  const {question} = props;
  return (
    <div className="question-screen">
      {question}
    </div>
  );
}

const mapStateToProps = state => ({
  question: state.data.question,
});

export default connect(mapStateToProps, {})(QuestionScreen);
