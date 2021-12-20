import React from "react";
import { connect } from "react-redux";
import { increaseUser } from "../redux";

function Users(props) {
  return (
    <div>
      <h2>Here are the Users - {props.users}</h2>
      <button onClick={props.increaseUser}>Increase Users By 2</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.muser.users
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseUser: () => dispatch(increaseUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
