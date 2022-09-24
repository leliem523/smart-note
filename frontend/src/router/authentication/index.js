const { lazy } = require("react");

const Router = [
  {
    key: "login",
    path: "login",
    Component: lazy(() => import("../../page/authentication/Login")),
    authenticate: false,
  },
];

export default Router;
