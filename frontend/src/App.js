import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListRoutes from "./router";

function App() {
  const listUser = useSelector((state) => state.authenticate.listUser);
  const userId = localStorage.getItem("Auth:user");
  let isAuthenticate = false;
  if (!!userId) {
    isAuthenticate = !!listUser.find((user) => user.id === +userId);
  }
  console.log(isAuthenticate ? "da dang nhap!" : "chua dang nhap!");

  return (
    <Fragment>
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
