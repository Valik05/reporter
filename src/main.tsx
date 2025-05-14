import './styles/index.css';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/useAuth.tsx';
import { ReportProvider } from './context/useReport.tsx';
import { FilterProvider } from './context/useFilter.tsx';
import { LoadingProvider } from './context/useLoading.tsx';
import { SystemMsgProvider } from './context/useSystemMsg.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SystemMsgProvider>
      <AuthProvider>
        <FilterProvider>
          <ReportProvider>
            <LoadingProvider>
              <App />
            </LoadingProvider>
          </ReportProvider>
        </FilterProvider>
      </AuthProvider>
    </SystemMsgProvider>
  </BrowserRouter>
)
