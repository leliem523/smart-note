const { lazy } = require("react");

const Router = [
  {
    key: "login",
    path: "login",
    Component: lazy(() => import("../../page/authentication/Login")),
    authenticate: false,
  },
  {
    key: "register",
    path: "register",
    Component: lazy(() => import("../../page/authentication/Register")),
    authenticate: false,
  },
];

export default Router;
