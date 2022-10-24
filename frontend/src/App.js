import { Fragment, lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ListRoutes from "./router";
import PageNotFound from "./page/common/PageNotFound";

// Global style
import "./assets/css/custom.scss";

function App() {
  // Check loading
  const loader = useSelector((state) => state.common.loader);

  // Check login
  const listUser = useSelector((state) => state.authenticate.listUser);
  const userId = localStorage.getItem("Auth:user");
  let isAuthenticate = false;
  if (!!userId) {
    isAuthenticate = !!listUser.find((user) => user.id === +userId);
  }

  return (
    <Fragment>
      {loader && (
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      )}
      <Routes>
        {ListRoutes.filter(
          (RouteItem) => RouteItem.authenticate === isAuthenticate
        ).map((RouteItem) => (
          <Route
            key={`route-item-${RouteItem.key}`}
            path={RouteItem.path}
            element={
              <RouteItem.Layout>
                <RouteItem.Component />
              </RouteItem.Layout>
            }
          />
        ))}
        {isAuthenticate ? (
          <Route key="notFoundPage" path="*" element={<PageNotFound />} />
        ) : (
          <Route
            key="notFoundPage"
            path="*"
            element={<Navigate to="/login" replace />}
          />
        )}
      </Routes>
    </Fragment>
  );
}

export default App;
