import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './components/functional/First';
import Second from './components/functional/Second';
import Third from './components/functional/Third';
import Fourth from './components/functional/Fourth';
import First1 from './components/class/First1';
import Second1 from './components/class/Secons1';
import Third1 from './components/class/Third1';
import Fourth1 from './components/class/Fourth1';
import StudentParent from './components/student/class/StudentParent';
import StudentParent1 from './components/student/function/StudentParent1';
import EventDemo from './components/eventdemo/EventDemo';
import Details from './components/display/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>1.First task</h2>
    {/* first task completed */}
    <App />
    {/* second task completed */}
    <h2>2.Second task</h2>
    <First/>
    <Second />
    <Third />
    <Fourth />
    {/* third task completed */}
    <h2>3.Third task</h2>
    <First1/>
    <Second1/>
    <Third1/>
    <Fourth1/>
        {/* fourth task completed */}
        <h2>4.Fourth task</h2>
        <p>Students using class components</p>
        <StudentParent />
        <p>Students using Function components</p>
        <StudentParent1 />
        {/* fifth task completed */}
        <h2>5.Fifth task</h2>
        <Details />
        {/* Sixth task completed */}
        <h2>6.Sixth task</h2>
        <EventDemo />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
