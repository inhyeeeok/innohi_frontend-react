// These must be the first lines in src/index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Main from './views/main/Main';
import Board from './views/community/Board';
import Intro from './views/intro/Intro';
import OIEvent from './views/event/OIEvent';
import Dfs from './views/program/Dfs';
import StartupSourcing from './views/program/StartupSourcing';
import StartupArchive from './views/community/StartupArchive';
import ErrorPage from './views/common/ErrorPage';

import Header from './components/header/Header'
import Footer from './components/footer/Footer';

import './assets/style/style.css';
import './assets/style/custom.css';

import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route exact path='/intro' element={<Intro />}></Route>
          <Route exact path='/program/startup' element={<StartupSourcing />}></Route>
          <Route exact path='/dfs' element={<Dfs />}></Route>
          <Route exact path='/event/oi' element={<OIEvent />}></Route>
          <Route exact path='/community/board' element={<Board />}></Route>
          <Route exact path='/community/startup' element={<StartupArchive />}></Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      <Footer />
      {/* <Navigate from='*' to='/' /> */}
    </React.StrictMode>
  </BrowserRouter>,
  
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
