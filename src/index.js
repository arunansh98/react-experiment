import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import GetLoggedComponent from "./components/hoc-playground/LoggerComponent";
// import withLogger from "./components/hoc-playground/LoggerComponent";
// import withAuthentication from "./components/hoc-playground/AuthenticatedComponent";

const el = document.getElementById("root");

const root = createRoot(el);

/**
 * hoc-playground-start
 */

// const LoggedComponent = withLogger(App);

// root.render(<LoggedComponent />);

// const AuthenticatedComponent = withAuthentication(App);

// root.render(<AuthenticatedComponent />);

/**
 * hoc-playground-end
 */

root.render(<App />);
