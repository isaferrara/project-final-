import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { AppCtxProvider } from './hooks/context'
import 'antd/dist/antd.css';

ReactDOM.render(
    // <React.StrictMode>
    <AppCtxProvider>
        <Router />
    </AppCtxProvider>
    // </React.StrictMode>,
    ,document.getElementById('root')
    );

serviceWorker.unregister();
