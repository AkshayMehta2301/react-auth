import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store.jsx'
import {Provider} from 'react-redux'
import Authprovider from './redux/provider/authProvider.jsx'
import ToastProvider from './redux/provider/toastprovider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    
      <Authprovider>
        <ToastProvider>
      <App />    
      </ToastProvider>
    </Authprovider>
    
    
    </BrowserRouter>
    </Provider>
  // </StrictMode>,
)
