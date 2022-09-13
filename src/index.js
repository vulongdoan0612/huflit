import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
//import để sử dụng redux
import store from './components/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* bọc bằng provider để sử dụng redux  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
