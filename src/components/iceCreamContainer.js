import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

function IceCreamContainer(props) {
  console.log("in IceCreamContanter", props);
  return (
    <div>
      <h1>Number of IceCreams in shop are - {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapSateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(IceCreamContainer);
