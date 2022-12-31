import React from 'react'
import ReactDOM from 'react-dom'
// import {GlobalProvider} from './context/GlobalState'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
import App from './App'
import{ GlobalProvider} from './context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
  <GlobalProvider>
    <App />
  </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
