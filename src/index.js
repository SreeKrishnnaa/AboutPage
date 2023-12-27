import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Auth0Provider 
domain="dev-xh72fggtqa20mn7m.us.auth0.com"
clientId="rWYyxvPggkQZD5vPwu1jvEePdOsCvCpc"
authorizationParams={{
  redirect_uri: window.location.origin
}}>

<App />

</Auth0Provider>



   
  </React.StrictMode>
);


reportWebVitals();
