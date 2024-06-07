
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageContextProvider } from './providers/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<LanguageContextProvider>
<App />
</LanguageContextProvider> 
)
