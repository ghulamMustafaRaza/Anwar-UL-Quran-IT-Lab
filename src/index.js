import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import RTEP from 'react-tap-event-plugin';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { initializeApp } from 'firebase'

var config = {
  apiKey: "AIzaSyAGTRN-xgq_pJJj40iE_JkkUAqLZzDVD9I",
  authDomain: "quiz-app-react.firebaseapp.com",
  databaseURL: "https://quiz-app-react.firebaseio.com",
  projectId: "quiz-app-react",
  storageBucket: "quiz-app-react.appspot.com",
  messagingSenderId: "393979995930"
};
initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
RTEP()
registerServiceWorker();
