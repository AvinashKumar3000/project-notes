import './App.css'
import { AuthProvider } from './context/AuthContext';
import { StorageProvider } from './context/StorageContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <StorageProvider>
        <AppRoutes />
      </StorageProvider>
    </AuthProvider>
  )
}

export default App;
