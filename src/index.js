import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from './store/index'
import {Root} from "./Root";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Root store={configureStore()} />
);
