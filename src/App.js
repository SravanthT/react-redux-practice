import CakeComponent from "./components/cakeContainer";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/iceCreamContainer";
import Users from "./components/userCounter";

export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
        <CakeComponent />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}
