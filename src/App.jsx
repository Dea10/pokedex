import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./store/store";

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App;
