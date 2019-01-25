import React from "react";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  number: store.counter.number
});

const Number = props => {
  return <h1>{props.number}</h1>;
};

// const Number = props => {
//   const { number } = props;
// return <h1>{number}</h1>;
// };

// const Number = ({ number }) => {
//   return <h1>{number}</h1>;
// };

export default connect(mapStateToProps)(Number);
