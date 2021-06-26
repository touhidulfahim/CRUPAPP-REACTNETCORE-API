import "./App.css";
import { AppStore } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Body from "./layout/Body";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  return (
    <Provider store={AppStore}>
      <ToastProvider autoDismiss={true}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Body />
          </div>
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  );
};

export default App;
