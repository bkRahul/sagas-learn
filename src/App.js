import { connect } from "react-redux";
import { Button } from "antd";
import { startDecrement, startIncrement } from "./redux/app.actions";

const App = ({ value, increment, decrement }) => {
  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subract</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(startIncrement()),
  decrement: () => dispatch(startDecrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
