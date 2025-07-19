import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store/configureStore.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
)
