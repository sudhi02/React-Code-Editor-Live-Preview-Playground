import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Babel from '@babel/standalone';

// Make React, ReactDOM and Babel available globally for the code editor
export const loadReactGlobally = () => {
  if (!window.React) {
    window.React = React;
  }
  if (!window.ReactDOM) {
    window.ReactDOM = ReactDOM;
  }
  if (!window.Babel) {
    window.Babel = Babel;
  }
};

// Clean up global objects if needed
export const unloadReactGlobally = () => {
  // Typically you don't need to clean these up as they're needed throughout the app
};