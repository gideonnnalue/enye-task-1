import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./style.css";
import MainPage from "./components/MainPage";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
