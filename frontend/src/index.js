import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import 'antd/dist/antd.css'
=======
import { AppCtxProvider } from './hooks/context'
import 'antd/dist/antd.css';
>>>>>>> 9500e505f2c2ca60c2871babf7bfd86a1fe4c972

ReactDOM.render(
    // <React.StrictMode>
    <AppCtxProvider>
        <Router />
    </AppCtxProvider>
    // </React.StrictMode>,
    ,document.getElementById('root')
    );

serviceWorker.unregister();
