import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsMainModule from './ReviewsMainModule.jsx';

var standalone = document.getElementById('ReviewsMainModule');
var proxy = document.getElementById('ReviewsMainModuleProxy');

if (standalone) {
  ReactDOM.render(<ReviewsMainModule/>, standalone);
} else {
  ReactDOM.render(<ReviewsMainModule/>, proxy);
}