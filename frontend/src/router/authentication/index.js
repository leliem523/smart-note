const { lazy } = require("react");

const Router = [
  {
    key: "login",
    path: "login",
    Component: lazy(() => import("../../page/authentication/Login")),
    authenticate: false,
    Layout: lazy(() => import('../../layouts/blankLayout')),
  },
  {
    key: "register",
    path: "register",
    Component: lazy(() => import("../../page/authentication/Register")),
    authenticate: false,
    Layout: lazy(() => import('../../layouts/blankLayout')),
  },
];

export default Router;
