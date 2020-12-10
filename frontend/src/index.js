import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { AppContext } from "./hooks/context"
import 'antd/dist/antd.css';

ReactDOM.render(
    // <React.StrictMode>
    <AppContext>
    <Router />
    </AppContext>
    // </React.StrictMode>,
    ,document.getElementById('root')
    );

serviceWorker.unregister();
