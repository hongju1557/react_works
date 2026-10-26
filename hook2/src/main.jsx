import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/index.js'
import CounterReducer from './apps/CounterReducer.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <CounterReducer />
    </Provider>
)
