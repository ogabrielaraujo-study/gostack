import React from "react";
import { Router } from "react-router-dom";

import "./config/ReactotronConfig";
import GlobalStyle from "./styles/global";

import Routes from "./routes";
import history from "./services/history";

// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />

          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
