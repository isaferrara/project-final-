import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { CtxProvider } from "./hooks/context"
import 'antd/dist/antd.css';
//<script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script> 

ReactDOM.render(
    // <React.StrictMode>
    <CtxProvider>
    <Router />
    </CtxProvider>
    // </React.StrictMode>,
    ,document.getElementById('root')
    );

serviceWorker.unregister();
