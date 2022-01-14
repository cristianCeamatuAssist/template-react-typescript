import { Routes, Route, Navigate } from 'react-router-dom'
// pages
import { Dogs, PathsEnum } from 'pages'

export const Router = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={PathsEnum.dogs} element={<Dogs />} />

      {/* Signed in routes */}
      {/* <Route element={(() => (loggedIn ? <Outlet /> : <Navigate replace to={PathsEnum.login} />))()}>
        <Route path={`${PathsEnum.route1}/*`} element={<DataHandling />} />
      </Route>*/}
      <Route path={PathsEnum.other} element={<Navigate replace to={PathsEnum.defaultRoute} />} />
    </Routes>
  )
}
