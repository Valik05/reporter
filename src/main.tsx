import './styles/index.css';
import App from './App.tsx';
import WebApp from '@twa-dev/sdk';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SdkProvider } from './context/useSdk.tsx';
import { AuthProvider } from './context/useAuth.tsx';
import { UserProvider } from './context/useUser.tsx';
import { ReportProvider } from './context/useReport.tsx';
import { FilterProvider } from './context/useFilter.tsx';
import { LoadingProvider } from './context/useLoading.tsx';
import { SideMenuProvider } from './context/useSideMenu.tsx';
import { SystemMsgProvider } from './context/useSystemMsg.tsx';

WebApp.ready();

createRoot(document.getElementById('root')!).render(
  <SdkProvider>
    <BrowserRouter>
      <SystemMsgProvider>
        <AuthProvider>
          <UserProvider>
            <FilterProvider>
              <ReportProvider>
                <SideMenuProvider>
                  <LoadingProvider>
                    <App />
                  </LoadingProvider>
                </SideMenuProvider>
              </ReportProvider>
            </FilterProvider>
          </UserProvider>
        </AuthProvider>
      </SystemMsgProvider>
    </BrowserRouter>
  </SdkProvider>
)
