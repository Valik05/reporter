import Layout from './layout/Layout';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoutes from './routes/ProtectedRoutes';
import ReportCreater from './components/ReportCreater/ReportCreater';
import ReportHistory from './components/ReportHistory/ReportHistory';
import { LOCAL_STORAGE } from './enums/localStorage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="transition-fade" timeout={300}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ReportCreater />} />
            <Route element={<ProtectedRoutes isLoggenIn={!!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)} redirectPath='/' />}>
              <Route path='/report/:report_id/edit' element={<ReportCreater mode="edit" />} />
              <Route path='/report-history' element={<ReportHistory />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
