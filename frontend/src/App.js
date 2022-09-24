import "./assets/style/custom.css";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ListRoutes from "./router";

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
            element={<RouteItem.Component />}
          />
        ))}
      </Routes>
    </Fragment>
  );
}

export default App;
