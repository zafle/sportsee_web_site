import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout/MainLayout'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Settings from '../pages/Settings/Settings'
import Community from '../pages/Community/Community'
import Error from '../pages/Error/Error'
import Error404 from '../pages/Error/components/Error404/Error404'
import Error503 from '../pages/Error/components/Error503/Error503'
import ErrorOther from '../pages/Error/components/ErrorOther/ErrorOther'

/**
 * Application Router
 *
 * @returns {React.ReactElement} React Component Router
 */
function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="/error" element={<Error />}>
            <Route path="404" element={<Error404 />} />
            <Route path="503" element={<Error503 />} />
            <Route index element={<ErrorOther />} />
          </Route>
          <Route path="*" element={<Navigate to="/error/404" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router
