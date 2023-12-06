import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./components/Context";

ReactDOM.render(
    <StrictMode>
        <Router>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </Router>
    </StrictMode>,
    document.getElementById('root')
)