import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './redux/store.ts';
import './index.css';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster /> {/* The toaster needs to be on the main.tsx to render it on all pages */}
      <App />
    </Provider>
  </React.StrictMode>,
);
