import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Redux from 'redux';
import reactRedux from 'react-redux';
import App from './app/App';
import Antd from 'antd';
import 'antd/dist/antd.min.css';
import './assets/common.scss';
import './index.scss';
render(<App/>, document.getElementById("app"));
