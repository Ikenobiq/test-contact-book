import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./navigation/Routes";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
