import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "nprogress/nprogress.css";
import { PersistGate } from "redux-persist/integration/react";

// 1. khai báo dispatch + actions => react component
// 2. Khai báo reducer + logic => reducer
// 3. Sử dụng state của Redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
