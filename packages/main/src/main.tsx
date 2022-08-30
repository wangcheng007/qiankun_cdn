/*
 * @Author: lanjing
 * @Date: 2022-08-29 15:33:33
 * @LastEditors: lanjing
 * @Description: file content
 */
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.querySelector("#root")
);